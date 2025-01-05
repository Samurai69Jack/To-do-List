import { describe, it, expect, vi } from 'vitest';
import { getUrl } from '../services/urlService';
import { supabase } from '../lib/supabase';
import { getCachedUrl } from '../lib/redis';

vi.mock('../lib/supabase');
vi.mock('../lib/redis');

describe('URL Expiration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getCachedUrl.mockResolvedValue(null);
  });

  it('should return URL if not expired', async () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    supabase.from.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: {
              long_url: 'https://example.com',
              expires_at: futureDate.toISOString()
            }
          })
        })
      })
    });

    const url = await getUrl('test');
    expect(url).toBe('https://example.com');
  });

  it('should throw error if URL is expired', async () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);

    supabase.from.mockReturnValue({
      select: () => ({
        eq: () => ({
          single: () => ({
            data: {
              long_url: 'https://example.com',
              expires_at: pastDate.toISOString()
            }
          })
        })
      })
    });

    await expect(getUrl('test')).rejects.toThrow('URL has expired');
  });
});