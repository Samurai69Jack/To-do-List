import { ZodError } from 'zod';

export const validateRequest = (schema) => async (req, res, next) => {
  try {
    req.validatedData = await schema.parseAsync(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        error: 'Validation Error',
        details: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      });
    } else {
      next(error);
    }
  }
};