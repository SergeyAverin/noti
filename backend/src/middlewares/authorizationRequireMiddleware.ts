import { Request, Response, NextFunction } from 'express'

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
      res.status(401).send({
        name: error.name,
        message: error.message,
      })
    } else {
      throw error
    }
  }
}
