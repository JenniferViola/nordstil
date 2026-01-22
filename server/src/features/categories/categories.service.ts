// categories.service.ts
import * as repo from './categories.repo';
import type { Category } from './category.types';
import type { Product } from '../products/product.types';

export function getCategories(): Category[] {
  return repo.findCategories();
}

export function getCategoryById(id: number): Category | null {
  return repo.findCategoryById(id);
}

export function getProductsForCategory(id: number): Product[] {
  return repo.findProductsForCategory(id);
}
