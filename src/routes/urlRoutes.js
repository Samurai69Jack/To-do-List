import { generateQRCode } from '../services/qrcodeService.js';
import { exportUrlAnalytics } from '../services/exportService.js';

// Add to existing router
router.get('/:alias/qr', authenticate, async (req, res) => {
  try {
    const { color, size } = req.query;
    const shortUrl = `${process.env.BASE_URL}/api/shorten/${req.params.alias}`;
    
    const qrCode = await generateQRCode(shortUrl, {
      color: {
        dark: color || '#000000'
      },
      width: parseInt(size) || 300
    });
    
    res.json({ qrCode });
  } catch (error) {
    next(error);
  }
});

router.get('/:alias/export', authenticate, async (req, res) => {
  try {
    const { format = 'csv' } = req.query;
    const data = await exportUrlAnalytics(req.params.alias, format);
    
    const contentType = format === 'csv' ? 'text/csv' : 'application/json';
    const filename = `analytics-${req.params.alias}.${format}`;
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(data);
  } catch (error) {
    next(error);
  }
});