import { Request, Response } from 'express'

import jwt from 'jsonwebtoken'
import log4js from 'log4js'
import { StatusCodes } from 'http-status-codes'

import { IUser, User } from '../models/user.model'
import { IToken, Token } from '../models/token.model'
import { comparePassword } from '../utils/passwordUtils'
import { AuthorizationError } from '../errors/AuthorizationError'
import { removeToken } from '../services/auth.service'

const logger = log4js.getLogger()

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    
    if (!user) {
      throw new AuthorizationError()
    }

    const isMatch = await comparePassword(req.body.password, user.password)
    if (!isMatch) {
      throw new AuthorizationError()
    }

    const token = new Token({
      token: jwt.sign({ _id: user._id.toString() }, 'mysecretkey'),
    })
    await token.save()

    user.tokens.push(token)
    await user.save()

    res.send({ token, user })
  } catch (error) {
    if (error instanceof AuthorizationError) {
      res.status(StatusCodes.UNAUTHORIZED).send({
        name: error.name,
        message: error.message,
      })
    }
  }
}

export const logout = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser
  const token = res.locals.token as IToken
  
  await removeToken(user, token)

  res.status(StatusCodes.NO_CONTENT).end()
}
