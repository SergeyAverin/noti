import path from 'path'

import 'express-async-errors'
import express, { Express, ErrorRequestHandler } from 'express'
import log4js from 'log4js'
import bodyParser from 'body-parser'

import routes from './routes/index'

const app: Express = express()

// Create logger
log4js.configure(path.join(__dirname, '../../conf/log4js.config.json'))
const logger = log4js.getLogger()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  log4js.connectLogger(log4js.getLogger('http'), {
    level: 'auto',
  }),
)

// Register router
app.use('/api/v1.0', routes)

// Error handler
/* eslint-disable @typescript-eslint/no-unused-vars */
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Something broke!')
}

export default app
