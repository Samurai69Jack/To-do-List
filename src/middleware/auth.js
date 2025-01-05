import { OAuth2Client } from 'google-auth-library';
import { supabase } from '../lib/supabase.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, sub: googleId } = ticket.getPayload();

    // Check if user exists in database
    const { data: user, error } = await supabase
      .from('users')
      .select()
      .eq('google_id', googleId)
      .single();

    if (!user) {
      // Create new user
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert([{ email, google_id: googleId }])
        .single();

      if (createError) throw createError;
      req.user = newUser;
    } else {
      req.user = user;
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};