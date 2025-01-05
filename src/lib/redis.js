import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export const cacheUrl = async (alias, longUrl) => {
  await redis.set(`url:${alias}`, longUrl, 'EX', 86400); // Cache for 24 hours
};

export const getCachedUrl = async (alias) => {
  return await redis.get(`url:${alias}`);
};

export const cacheAnalytics = async (key, data) => {
  await redis.set(key, JSON.stringify(data), 'EX', 3600); // Cache for 1 hour
};

export const getCachedAnalytics = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};