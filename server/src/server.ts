// server.ts

// Load .env only in development
if (process.env.NODE_ENV !== 'production') {
  import('dotenv').then((dotenv) => dotenv.config());
}

import express from 'express';
import cors from 'cors';

import config from './config/config';
import apiRouter from './api';
import { initDb } from './data/db';

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRouter);

const PORT = process.env.PORT || config.port || 8000;

async function startServer() {
  await initDb();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startServer();
