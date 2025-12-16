// hero/hero.repo.js
const db = require("../data/db");

function findActiveHero() {
  const stmt = db.prepare(`
    SELECT *
    FROM hero
    WHERE active = 1
    LIMIT 1
  `);
  return stmt.get();
}

module.exports = { findActiveHero };
