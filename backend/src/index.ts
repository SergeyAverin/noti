import app from './app';
import connectToMongoDB from './models/connectToMongoDB';

import log4js from 'log4js';


const PORT = Number(process.env.BACKEND_PORT);
const HOST = process.env.BACKEND_HOST as string;

const logger = log4js.getLogger();


// Start server
const start = async () => {
  connectToMongoDB();
  app.listen(PORT, () => {
    logger.info(
      `[server]: Server is running at http://${HOST}:${PORT}`,
    );
  });
};

start();
