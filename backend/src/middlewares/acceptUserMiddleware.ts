import { Request, Response, NextFunction } from 'express';

import log4js from 'log4js'
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { IUser, User } from '../models/user.model';

const logger = log4js.getLogger()

interface IDecoded {
  _id: undefined | string;
  iat: number;
};

export const acceptUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // if user is authenticated added user and token in res.locals 
    if (req.headers.authorization) {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, 'mysecretkey') as IDecoded;

      const user = await User.findOne({ _id: decoded._id }).populate('tokens') as IUser;

      if (user) {
        for (const userToken of user.tokens) {
          if (userToken.token == token) {
            res.locals.isAuthenticated = true;
            res.locals.user = user;
            res.locals.token = userToken
          } else {
            res.locals.isAuthenticated = false;
            res.locals.user = null;
            res.locals.token = null;
          }
        }
      } else {
        res.locals.isAuthenticated = false;
      }

    } else {
      res.locals.isAuthenticated = false;
    }
    
    next()
  } catch (error) {
    if (error instanceof Error) {
      const errorResponse = {
        name: error.name,
        message: error.message,
      };
      if (error instanceof jwt.TokenExpiredError) {
        // Token has expired
        res.status(StatusCodes.UNAUTHORIZED).send(errorResponse);
      } else if (error instanceof jwt.JsonWebTokenError) {
        // Invalid token
        res.status(StatusCodes.UNAUTHORIZED).send(errorResponse);
      } else {
        // Other errors
        throw error;
      }
    }
  }
}
