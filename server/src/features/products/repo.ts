// products/repo.ts
import db from '../../data/db';
import type { Product } from './types';
import type { Category } from '../categories/types';

// fetch all published products
export function findPublished(): Product[] {
  const rows = db
    .prepare(
      `SELECT * 
      FROM products 
      WHERE published_date IS NOT NULL 
      AND published_date <> '' 
      AND published_date <= date('now') 
      ORDER BY published_date DESC;
`,
    )
    .all();
  return rows as Product[];
}

export function findAll(): Product[] {
  const rows = db
    .prepare(
      `SELECT * FROM products 
      ORDER BY published_date DESC`,
    )
    .all();
  return rows as Product[];
}

export function findFeatured(): Product[] {
  const rows = db
    .prepare(
      `SELECT * FROM products 
      WHERE published_date IS NOT NULL 
      AND published_date <> '' 
      AND published_date <= date('now') 
      AND featured = 1 
      ORDER BY published_date DESC 
      LIMIT 8`,
    )
    .all();
  return rows as Product[];
}

//Search for products
export function searchPublished(query: string): Product[] {
  const stmt = db.prepare(`
    SELECT DISTINCT p.*
    FROM products p
    LEFT JOIN category_products cp ON p.id = cp.product_id
    LEFT JOIN categories c ON c.id = cp.category_id
    WHERE published_date IS NOT NULL 
    AND published_date <> '' 
    AND published_date <= date('now') 
      AND (
        p.title LIKE ?
        OR p.brand LIKE ?
        OR p.description LIKE ?
        OR c.title LIKE ?
      )
    ORDER BY p.published_date DESC
  `);

  const like = `%${query.trim()}%`;

  return stmt.all(like, like, like, like) as Product[];
}

// fetch a published product by its slug
export function findPublishedBySlug(slug: string): Product | null {
  const row = db
    .prepare(
      `SELECT * FROM products WHERE slug = ? 
      AND published_date IS NOT NULL 
      AND published_date <> '' 
      AND published_date <= date('now') 
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

export function deleteProductById(productId: number) {
  const stmt = db.prepare(`
    DELETE FROM products WHERE id = ?
    `);
  return stmt.run(productId);
}

export function addNewProduct(product: Omit<Product, 'id'> & { slug: string }) {
  const fields = ['sku', 'title', 'img_url', 'slug'];
  const values: any[] = [
    product.sku,
    product.title,
    product.img_url,
    product.slug,
  ];

  if (product.published_date) {
    fields.push('published_date');
    values.push(product.published_date);
  }

  if (product.brand) {
    fields.push('brand');
    values.push(product.brand);
  }

  if (product.price !== undefined) {
    fields.push('price');
    values.push(product.price);
  }

  if (product.description) {
    fields.push('description');
    values.push(product.description);
  }

  if (product.color_name) {
    fields.push('color_name');
    values.push(product.color_name);
  }

  if (product.color_hex) {
    fields.push('color_hex');
    values.push(product.color_hex);
  }

  if (product.is_published !== undefined) {
    fields.push('is_published');
    values.push(product.is_published ? 1 : 0); // Convert boolean to number
  }

  if (product.featured !== undefined) {
    fields.push('featured');
    values.push(product.featured ? 1 : 0); // Convert boolean to number
  }

  const placeholders = fields.map(() => '?').join(', ');

  const stmt = db.prepare(`
    INSERT INTO products (${fields.join(', ')})
    VALUES (${placeholders})
  `);

  return stmt.run(values);
}

export function addProductCategories(productId: number, categoryIds: number[]) {
  const stmt = db.prepare(`
    INSERT INTO category_products (product_id, category_id)
    VALUES (?, ?)
  `);

  for (const categoryId of categoryIds) {
    stmt.run(productId, categoryId);
  }
}
