import 'express-async-errors'
import express, { Express } from 'express'
import log4js from 'log4js'
import bodyParser from 'body-parser'
import log4jsConfig from '../conf/log4js.config'

import routes from './routes/index'
import { acceptUserMiddleware } from './middlewares/acceptUserMiddleware'
import { errorHandler } from './middlewares/errorHandlerMiddleware'

const app: Express = express()

// Create logger
log4js.configure(log4jsConfig)

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
app.use(errorHandler)

export default app
