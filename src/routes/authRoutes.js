import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.post('/verify', authenticate, (req, res) => {
  res.json({ user: req.user });
});

export default router;