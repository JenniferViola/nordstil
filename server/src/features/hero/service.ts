// hero.service.ts
import type { Hero } from './types';
import { findActiveHero } from './repo';

export function getActiveHero(): Hero | null {
  return findActiveHero();
}
