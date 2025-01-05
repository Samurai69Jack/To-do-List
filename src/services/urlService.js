import QRCode from 'qrcode';
import { nanoid } from 'nanoid';
import { supabase } from '../lib/supabase.js';
import { cacheUrl, getCachedUrl } from '../lib/redis.js';

export const createShortUrl = async ({ longUrl, customAlias, topic, expiresAt }) => {
  const alias = customAlias || nanoid(8);
  
  const { data, error } = await supabase
    .from('urls')
    .insert([{
      user_id: req.user.id,
      alias,
      long_url: longUrl,
      topic,
      expires_at: expiresAt
    }])
    .single();

  if (error) {
    if (error.code === '23505') {
      throw new Error('Alias already exists');
    }
    throw error;
  }

  const shortUrl = `${process.env.BASE_URL}/api/shorten/${alias}`;
  const qrCode = await QRCode.toDataURL(shortUrl);

  await cacheUrl(alias, longUrl);

  return {
    shortUrl,
    createdAt: data.created_at,
    qrCode
  };
};

export const getUrl = async (alias) => {
  // Check cache first
  const cachedUrl = await getCachedUrl(alias);
  if (cachedUrl) return cachedUrl;

  // Check database
  const { data, error } = await supabase
    .from('urls')
    .select('*')
    .eq('alias', alias)
    .single();

  if (error || !data) {
    throw new Error('URL not found');
  }

  // Check expiration
  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    throw new Error('URL has expired');
  }

  await cacheUrl(alias, data.long_url);
  return data.long_url;
};