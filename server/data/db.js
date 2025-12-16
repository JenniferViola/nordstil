// data/db.js
const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

// Paths
const sqlFile = path.join(__dirname, "data.sql");
const dbFile = path.join(__dirname, "data.db");

// Read SQL schema and seed data
const sql = fs.readFileSync(sqlFile, "utf8");

// Create or open database
const db = new Database(dbFile);

// Rebuild database each time (drops + recreates)
console.log("Loading SQL from:", sqlFile);

try {
  db.exec(sql);
  console.log("SQL executed!");
} catch (err) {
  console.error("SQL FAILED:", err.message);
  process.exit(1);
}

console.log("Database rebuilt and seeded successfully.");

module.exports = db;
