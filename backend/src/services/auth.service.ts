import log4js from 'log4js'

import { IUser, User } from '../models/user.model'
import { IToken } from '../models/token.model'

const logger = log4js.getLogger()

export const removeToken = async (user: IUser, token: IToken) => {
  await User.updateOne({ _id: user.id }, { $pull: { tokens: token.id } })
  logger.debug(token._id)
}
