// products.service.ts
import * as repo from './products.repo';
import type { Product } from './product.types';
import type { ProductWithCategories } from './product.types';

export function getPublishedProducts(): Product[] {
  return repo.findPublished();
}

export function getPublishedProductBySlug(slug: string): Product | null {
  return repo.findPublishedBySlug(slug);
}

export function getCategoriesByProduct(id: number): ProductWithCategories {
  // fetch the product itself
  const product = repo.findProductById(id);

  // fetch categories for this product
  const categories = repo.findCategoriesByProductId(id);

  // return enriched object
  return {
    ...product,
    categories,
  };
}
