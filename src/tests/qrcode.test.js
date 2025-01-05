import { describe, it, expect, vi } from 'vitest';
import QRCode from 'qrcode';
import { createShortUrl } from '../services/urlService';

vi.mock('qrcode');

describe('QR Code Generation', () => {
  it('should generate QR code for short URL', async () => {
    const mockQRCode = 'data:image/png;base64,mockQRCode';
    QRCode.toDataURL.mockResolvedValue(mockQRCode);

    const result = await createShortUrl({
      longUrl: 'https://example.com',
      customAlias: 'test'
    });

    expect(result.qrCode).toBe(mockQRCode);
    expect(QRCode.toDataURL).toHaveBeenCalled();
  });

  it('should handle QR code generation errors', async () => {
    QRCode.toDataURL.mockRejectedValue(new Error('QR Code generation failed'));

    await expect(createShortUrl({
      longUrl: 'https://example.com'
    })).rejects.toThrow('QR Code generation failed');
  });
});