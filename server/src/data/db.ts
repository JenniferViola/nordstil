import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const sqlFile = path.join(__dirname, 'data.sql');
const dbFile = path.join(__dirname, 'data.db');

const sql = fs.readFileSync(sqlFile, 'utf8');

// Optionally delete old db
if (fs.existsSync(dbFile)) fs.unlinkSync(dbFile);

const db = new Database(dbFile);

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
