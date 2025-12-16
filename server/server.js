// server.js
const express = require("express");
const port = 8000;
const cors = require("cors");

require("./data/db.js");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// API routes
const apiRouter = require("./api");
app.use("/api", apiRouter);

app.listen(8000, () => {
  console.log(`Server started on port ${port}`);
});
