import log4js from 'log4js'

import { IUser, User } from '../models/user.model'
import { IToken } from '../models/token.model'
import { UserRepository } from '../repository/user.repository'
import { СreateUserDTO } from '../repository/DTO/createUserDTO'
import { ValidationError } from '../errors/ValidationError'

const logger = log4js.getLogger()

export const removeToken = async (
  user: IUser,
  token: IToken,
): Promise<void> => {
  await User.updateOne({ _id: user.id }, { $pull: { tokens: token.id } })
  logger.debug(token._id)
}

export const registrationUser = async (
  username: string,
  email: string,
  password1: string,
  password2: string,
): Promise<IUser> => {
  const userData = new СreateUserDTO(username, email, password1)
  const userRepository = new UserRepository()

  if (password1 != password2) {
    throw new ValidationError("Passwords don't match")
  }

  const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  if (!email.match(regex)) {
    throw new ValidationError('Invalid email')
  }

  try {
    await userRepository.getUserByEmail(email)
    throw new ValidationError('User with this email already exists')
  } catch (e) {
    const createdUser = await userRepository.createUser(userData)
    return createdUser
  }
}
