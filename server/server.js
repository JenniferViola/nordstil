// server.js
const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;

const db = new Database("./db/tasks.db", {
  // Vi vill se SQL kommandon som körs i konsolen
  verbose: console.log,
});

const app = express();

// För att ladda in en array av tasks i frontend via API
app.get("/api/tasks", (req, res) => {
  const select = db.prepare("SELECT id, name, status FROM tasks");
  const tasks = select.all();

  res.json(tasks);
});

app.listen(8000, () => {
  console.log(`Server started on port ${port}`);
});
