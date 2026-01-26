// categories.service.ts
import * as repo from './repo';
import type { Category } from './types';
import type { Product } from '../products/types';

export function getCategories(): Category[] {
  return repo.findCategories();
}

export function getCategoryById(id: number): Category | null {
  return repo.findCategoryById(id);
}

export function getProductsForCategory(id: number): Product[] {
  return repo.findProductsForCategory(id);
}
