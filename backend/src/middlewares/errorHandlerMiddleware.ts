import { ErrorRequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

import log4js from 'log4js'

const logger = log4js.getLogger()

// Error handler
/* eslint-disable @typescript-eslint/no-unused-vars */
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack)

  if (process.env.NODE_ENV === 'development') {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      name: err.name,
      message: err.message,
    })
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      name: 'server error',
    })
  }
}
