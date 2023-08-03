import { Request, Response, NextFunction } from 'express'

import { StatusCodes } from 'http-status-codes'

import { PermissionError } from '../errors/PermissionError'

export const authorizationRequireMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (res.locals.isAuthenticated) {
      next()
    } else {
      throw new PermissionError()
    }
  } catch (error) {
    if (error instanceof PermissionError) {
      res.status(StatusCodes.UNAUTHORIZED).send({
        name: error.name,
        message: error.message,
      })
    } else {
      throw error
    }
  }
}
