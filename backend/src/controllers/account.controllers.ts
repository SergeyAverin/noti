import { Request, Response } from 'express'

import jwt from 'jsonwebtoken'
import log4js from 'log4js'
import { StatusCodes } from 'http-status-codes'

import { User } from '../models/user.model'
import { Token } from '../models/token.model'
import { comparePassword } from '../utils/passwordUtils'
import { AuthorizationError } from '../errors/AuthorizationError'

const logger = log4js.getLogger()

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    logger.info(res.locals.user)
    if (!user) {
      logger.debug('no email')
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
