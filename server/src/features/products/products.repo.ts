// db/products.repo.ts
import db from '../../data/db';
import type { Product } from './product.types';
import type { Category } from '../categories/category.types';

// fetch all published products
export function findPublished(): Product[] {
  const rows = db
    .prepare(
      `SELECT * FROM products 
      WHERE published_date IS NOT NULL 
      ORDER BY published_date DESC`,
    )
    .all();
  return rows as Product[];
}

// fetch a published product by its slug
export function findPublishedBySlug(slug: string): Product | null {
  const row = db
    .prepare(
      `SELECT * FROM products WHERE slug = ? 
      AND published_date IS NOT NULL 
      LIMIT 1`,
    )
    .get(slug);

  if (!row) return null;

  return row as Product;
}

// fetch a product by its id
export function findProductById(productId: number): Product {
  const row = db
    .prepare(`SELECT * FROM products WHERE id = ? LIMIT 1`)
    .get(productId);

  if (!row) throw new Error('Product not found');

  return row as Product;
}

// fetch categories linked to product
export function findCategoriesByProductId(productId: number): Category[] {
  const stmt = db.prepare(`
    SELECT c.*
    FROM categories c
    JOIN category_products cp ON c.id = cp.category_id
    WHERE cp.product_id = ?
  `);
  return stmt.all(productId) as Category[];
}
