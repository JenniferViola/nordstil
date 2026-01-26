// spots.repo.ts
import db from '../../data/db';
import type { Spot } from './types';

export function findSpots(): Spot[] {
  const rows = db.prepare('SELECT * FROM spots').all();

  return rows as Spot[];
}
