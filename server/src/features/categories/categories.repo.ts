// db/categories.repo.ts
import db from '../../data/db';
import type { Category } from './category.types';
import type { Product } from '../products/product.types';

export function findCategories(): Category[] {
  const rows = db.prepare(`SELECT * FROM categories`).all();
  return rows as Category[];
}

export function findCategoryById(id: number): Category | null {
  const row = db
    .prepare(
      `SELECT * FROM categories WHERE id = ? 
      LIMIT 1`,
    )
    .get(id);

  if (!row) return null;

  return row as Category;
}

// Find products for category
export function findProductsForCategory(categoryId: number): Product[] {
  const stmt = db.prepare(
    `SELECT p.*
     FROM products p
     JOIN category_products cp ON cp.product_id = p.id
     WHERE cp.category_id = ?`,
  );

  return stmt.all(categoryId) as Product[];
}
