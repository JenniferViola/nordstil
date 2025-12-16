// db/products.repo.js
const db = require("../data/db");

function findPublished() {
  const stmt = db.prepare(`
    SELECT *
    FROM products
    WHERE published_date IS NOT NULL
    ORDER BY published_date DESC
  `);
  return stmt.all();
}

function findPublishedBySlug(slug) {
  const stmt = db.prepare(`
    SELECT *
    FROM products
    WHERE slug = ?
      AND published_date IS NOT NULL
    LIMIT 1
  `);
  return stmt.get(slug);
}

module.exports = {
  findPublished,
  findPublishedBySlug,
};
