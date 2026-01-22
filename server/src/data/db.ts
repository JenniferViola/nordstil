// data/db.ts

import Database from 'better-sqlite3';
const fs = require('fs');
const path = require('path');

// Paths
const sqlFile = path.join(__dirname, 'data.sql');
const dbFile = path.join(__dirname, 'data.db');

// Read SQL schema and seed data
const sql = fs.readFileSync(sqlFile, 'utf8');

// Create or open database
const db = new Database('data.db');

// Rebuild database each time (drops + recreates)
console.log('Loading SQL from:', sqlFile);

try {
  db.exec(sql);
  console.log('SQL executed!');
} catch (err) {
  if (err instanceof Error) {
    console.error('SQL FAILED:', err.message);
  } else {
    console.error('SQL FAILED:', err);
  }
  process.exit(1);
}

console.log('Database rebuilt and seeded successfully.');

export default db;
