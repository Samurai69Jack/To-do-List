import { describe, it, expect, vi } from 'vitest';
import { authenticate } from '../middleware/auth';
import { OAuth2Client } from 'google-auth-library';

vi.mock('google-auth-library');
vi.mock('../lib/supabase');

describe('Authentication Middleware', () => {
  it('should reject requests without token', async () => {
    const req = { headers: {} };
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };
    const next = vi.fn();

    await authenticate(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('should verify valid tokens', async () => {
    const mockPayload = {
      email: 'test@example.com',
      sub: '123'
    };

    OAuth2Client.prototype.verifyIdToken = vi.fn().mockResolvedValue({
      getPayload: () => mockPayload
    });

    const req = {
      headers: { authorization: 'Bearer valid-token' }
    };
    const res = {};
    const next = vi.fn();

    await authenticate(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});