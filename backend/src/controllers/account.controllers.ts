import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import log4js from 'log4js'

import { User } from '../models/user.model'
import { Token } from '../models/token.model'
import { comparePassword } from '../utils/passwordUtils'
import { AuthorizationError } from '../errors/AuthorizationError'

const logger = log4js.getLogger()

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      logger.debug('no email')
      throw new AuthorizationError('Incorrect email or password')
    }

    const isMatch = await comparePassword(req.body.password, user.password)
    if (!isMatch) {
      throw new AuthorizationError('Incorrect email or password')
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
      res.status(401).send({ message: error.message })
    }
  }
}
