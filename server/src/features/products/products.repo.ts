// db/products.repo.ts
import db from '../../data/db';
import type { Product } from './product.types';

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
