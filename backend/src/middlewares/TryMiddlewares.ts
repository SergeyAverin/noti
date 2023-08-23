import { Request, Response, NextFunction } from 'express'

export async function errorInjector(
  req: Request,
  res: Response,
  next: NextFunction,
  func: Function,
) {
  try {
    await func(req, res, next)
  } catch (error) {
    next(error)
  }
}
