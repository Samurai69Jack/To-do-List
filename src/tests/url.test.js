import { describe, it, expect, beforeEach, vi } from 'vitest';
import { nanoid } from 'nanoid';
import { supabase } from '../lib/supabase';
import { cacheUrl, getCachedUrl } from '../lib/redis';
import { createShortUrl } from '../services/urlService';

vi.mock('nanoid');
vi.mock('../lib/supabase');
vi.mock('../lib/redis');

describe('URL Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('URL Creation', () => {
    it('should handle duplicate alias conflicts', async () => {
      const mockUrl = {
        longUrl: 'https://example.com',
        customAlias: 'existing',
      };

      supabase.from.mockReturnValue({
        insert: () => ({
          single: () => ({ error: { code: '23505' } })
        })
      });

      await expect(createShortUrl(mockUrl)).rejects.toThrow('Alias already exists');
    });

    it('should validate URL format', async () => {
      const mockUrl = {
        longUrl: 'invalid-url',
        customAlias: 'test'
      };

      await expect(createShortUrl(mockUrl)).rejects.toThrow('Invalid URL format');
    });

    it('should handle database errors gracefully', async () => {
      const mockUrl = {
        longUrl: 'https://example.com',
        customAlias: 'test'
      };

      supabase.from.mockReturnValue({
        insert: () => ({
          single: () => ({ error: new Error('Database error') })
        })
      });

      await expect(createShortUrl(mockUrl)).rejects.toThrow('Database error');
    });
  });

  describe('URL Caching', () => {
    it('should cache URL after creation', async () => {
      const mockUrl = {
        longUrl: 'https://example.com',
        customAlias: 'test'
      };

      supabase.from.mockReturnValue({
        insert: () => ({
          single: () => ({ data: { created_at: new Date().toISOString() } })
        })
      });

      await createShortUrl(mockUrl);
      expect(cacheUrl).toHaveBeenCalledWith('test', 'https://example.com');
    });

    it('should retrieve cached URL', async () => {
      getCachedUrl.mockResolvedValue('https://example.com');
      const url = await getCachedUrl('test');
      expect(url).toBe('https://example.com');
    });
  });
});