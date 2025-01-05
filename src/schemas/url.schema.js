import { z } from 'zod';

export const createUrlSchema = z.object({
  longUrl: z.string().url('Invalid URL format'),
  customAlias: z.string().min(3).max(50).optional(),
  topic: z.string().min(1).max(50).optional(),
  expiresAt: z.string().datetime().optional()
});

export const validateUrl = (data) => {
  return createUrlSchema.parse(data);
};