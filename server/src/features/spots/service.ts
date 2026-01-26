// spots.service.ts
import type { Spot } from './types';
import { findSpots } from './repo';

export function getSpots(): Spot[] {
  return findSpots();
}
