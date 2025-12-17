// server.ts
import express from "express";
import cors from "cors";

import config from "./config/config";
import apiRouter from "./api";

// Import for side effects (connect/init DB)
import "./data/db";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// API routes
app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
