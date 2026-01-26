// spots.controller.ts
import { Request, Response, NextFunction } from 'express';
import { getSpots } from './service';

export function listSpots(req: Request, res: Response, next: NextFunction) {
  try {
    const spots = getSpots();
    res.json(spots);
  } catch (err) {
    next(err);
  }
}
