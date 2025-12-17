// hero.service.ts
import type { Hero } from "./hero.types";
import { findActiveHero } from "./hero.repo";

export function getActiveHero(): Hero | null {
  return findActiveHero();
}