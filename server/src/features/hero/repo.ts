// hero/hero.repo.js
import { db } from '../../data/db';
import type { Hero } from './types';

export function findActiveHero(): Hero | null {
  const row = db.prepare('SELECT * FROM hero WHERE active = 1 LIMIT 1').get();

  if (!row) return null;

  return row as Hero;
}
