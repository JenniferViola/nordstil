// spots.service.ts
import type { Spot } from "./spots.types";
import { findSpots } from "./spots.repo";

export function getSpots(): Spot[] {
  return findSpots();
}
