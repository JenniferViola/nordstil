// products.service.ts
import * as repo from './repo';
import type { Product } from './types';
import type { ProductWithCategories } from './types';

export function getPublishedProducts(): Product[] {
  return repo.findPublished();
}

export function getFeaturedProducts(): Product[] {
  return repo.findFeatured();
}

export function searchPublishedProducts(query: string): Product[] {
  return repo.searchPublished(query);
}

export function getPublishedProductBySlug(slug: string): Product | null {
  return repo.findPublishedBySlug(slug);
}

export function getProductCategoriesBySlug(
  slug: string,
): ProductWithCategories | null {
  const product = repo.findPublishedBySlug(slug);
  if (!product) return null;

  const categories = repo.findCategoriesByProductId(product.id);

  return {
    ...product,
    categories,
  };
}

export function getCategoriesByProduct(id: number): ProductWithCategories {
  const product = repo.findProductById(id);

  const categories = repo.findCategoriesByProductId(id);

  return {
    ...product,
    categories,
  };
}

export function deleteProductById(id: number) {
  return repo.deleteProductById(id);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function postNewProduct(product: Product) {
  console.log('Service recieved:', product);
  const slug = slugify(product.title);
  const newProduct = repo.addNewProduct({
    ...product,
    slug,
  });
}
