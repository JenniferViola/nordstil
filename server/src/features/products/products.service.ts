// products.service.ts
import { findPublished, findPublishedBySlug } from './products.repo';
import type { Product } from './product.types';

export function getPublishedProducts(): Product[] {
  return findPublished();
}

export function getPublishedProductBySlug(slug: string): Product | null {
  return findPublishedBySlug(slug);
}
