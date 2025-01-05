import { supabase } from '../lib/supabase.js';
import { calculateAnalytics } from '../utils/analyticsUtils.js';
import { cacheAnalytics, getCachedAnalytics } from '../lib/redis.js';

export const getUrlAnalytics = async (alias) => {
  const cacheKey = `analytics:${alias}`;
  const cachedData = await getCachedAnalytics(cacheKey);
  if (cachedData) return cachedData;

  const { data: analytics } = await supabase
    .from('analytics')
    .select('*')
    .eq('urls.alias', alias)
    .join('urls', { 'analytics.url_id': 'urls.id' });

  const result = calculateAnalytics(analytics);
  await cacheAnalytics(cacheKey, result);
  return result;
};

export const getTopicAnalytics = async (topic) => {
  const cacheKey = `analytics:topic:${topic}`;
  const cachedData = await getCachedAnalytics(cacheKey);
  if (cachedData) return cachedData;

  const { data: analytics } = await supabase
    .from('analytics')
    .select('*')
    .eq('urls.topic', topic)
    .join('urls', { 'analytics.url_id': 'urls.id' });

  const result = {
    ...calculateAnalytics(analytics),
    urls: await getUrlsForTopic(topic)
  };

  await cacheAnalytics(cacheKey, result);
  return result;
};

export const getOverallAnalytics = async (userId) => {
  const cacheKey = `analytics:overall:${userId}`;
  const cachedData = await getCachedAnalytics(cacheKey);
  if (cachedData) return cachedData;

  const { data: analytics } = await supabase
    .from('analytics')
    .select('*')
    .eq('urls.user_id', userId)
    .join('urls', { 'analytics.url_id': 'urls.id' });

  const { data: totalUrls } = await supabase
    .from('urls')
    .select('id')
    .eq('user_id', userId);

  const result = {
    totalUrls: totalUrls.length,
    ...calculateAnalytics(analytics)
  };

  await cacheAnalytics(cacheKey, result);
  return result;
};