import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

let db: Database.Database;

export async function initDb() {
  const sqlFile = path.join(__dirname, 'data.sql');
  const dbFile = path.join(__dirname, 'data.db');

  const sql = fs.readFileSync(sqlFile, 'utf8');

  if (fs.existsSync(dbFile)) fs.unlinkSync(dbFile);
  db = new Database(dbFile);

  console.log('Loading SQL from:', sqlFile);

  const statements = sql
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  statements.forEach((statement, index) => {
    try {
      db.exec(statement);
    } catch (err) {
      console.error(`\nFAILED at Statement #${index + 1}:`);
      console.error(`--- SQL CODE ---`);
      console.error(statement);
      console.error(`--- ERROR ---`);
      if (err instanceof Error) console.error(err.message);
      process.exit(1);
    }
  });

  console.log('\n✅ Database rebuilt and seeded successfully.');
}

export { db };
