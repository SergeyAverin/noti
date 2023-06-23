import express, { Express, Request, Response } from 'express';

import routes from './routes/index';


const app: Express = express();
const PORT = Number(process.env.BACKEND_PORT);
const HOST = process.env.BACKEND_HOST as string;

// Middleware
app.use('/api/v1.0', routes);


app.listen(PORT, HOST, () => {
  console.log(`[server]: Server is running at http://${HOST}:${PORT}`);
});
