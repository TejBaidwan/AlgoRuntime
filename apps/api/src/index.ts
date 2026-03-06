import express, {type Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRouter from './routes/health.js';

dotenv.config();

// Create initial application and choose port
const app: Application = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());

// Health endpoint
app.use('/api/health', healthRouter);

app.listen(PORT, () => {
    console.log(`
  AlgoRuntime API is live
  URL: http://localhost:${PORT}/api/health
  `);
});