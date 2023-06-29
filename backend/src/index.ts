import path from 'path';

import express, { Express, ErrorRequestHandler } from 'express';
import log4js from 'log4js';

import routes from './routes/index';


const app: Express = express();
const PORT = Number(process.env.BACKEND_PORT);
const HOST = process.env.BACKEND_HOST as string;

log4js.configure(path.join(__dirname, '../../conf/log4js.config.json'));
const logger = log4js.getLogger();

// Middleware
app.use('/api/v1.0', routes);
app.use(
  log4js.connectLogger(logger, {
    level: 'auto',
  }),
)

// Error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Something broke!');
};

app.use(errorHandler);

app.listen(PORT, HOST, () => {
  logger.error('err')
  logger.info(`[server]: Server is running at http://${HOST}:${PORT}`)
});
