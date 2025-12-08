// server.js
const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;
const cors = require("cors");

const db = new Database("./db/data.db", {
  // Vi vill se SQL kommandon som körs i konsolen
  verbose: console.log,
});

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

const tasks = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
];

// För att ladda in en array av tasks i frontend via API
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(8000, () => {
  console.log(`Server started on port ${port}`);
});
