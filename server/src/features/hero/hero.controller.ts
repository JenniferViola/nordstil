// hero.controller.ts
import { Request, Response, NextFunction } from 'express';
import { getActiveHero } from './hero.service';

export function getHero(req: Request, res: Response, next: NextFunction) {
  try {
    const hero = getActiveHero();
    res.json(hero);
  } catch (err) {
    next(err);
  }
}
