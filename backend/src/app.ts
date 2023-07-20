import 'express-async-errors'
import express, { Express, ErrorRequestHandler } from 'express'
import log4js from 'log4js'
import bodyParser from 'body-parser'
import log4jsConfig from '../conf/log4js.config'

import routes from './routes/index'
import { acceptUserMiddleware } from './middlewares/acceptUserMiddleware'

const app: Express = express()

// Create logger
log4js.configure(log4jsConfig)
const logger = log4js.getLogger()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(
  log4js.connectLogger(log4js.getLogger('http'), {
    level: 'auto',
  }),
)
app.use(acceptUserMiddleware)

// Register router
app.use('/api/v1.0', routes)

// Error handler
/* eslint-disable @typescript-eslint/no-unused-vars */
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Something broke!')
}

export default app
