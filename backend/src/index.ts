import express, { Express, Request, Response } from 'express';


const app: Express = express();
const PORT = Number(process.env.BACKEND_PORT);
const HOST = process.env.BACKEND_HOST as string;

app.get('/', (req: Request, res: Response) => {
  res.send('Noti server');
});

app.listen(PORT, HOST, () => {
  console.log(`[server]: Server is running at http://${HOST}:${PORT}`);
});
