import { User } from '../models/user.model'
import { NotFoundError } from '../errors/NotFoundError'
import { СreateUserDTO } from './DTO/createUserDTO'
import { IUser } from '../models/user.model'

export class UserRepository {
  async getUserByUsername(username: string): Promise<IUser | null> {
    const user = await User.findOne({ username: username })
    if (!user) {
      throw new NotFoundError()
    }
    return user
  }
  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email: email })
    if (!user) {
      throw new NotFoundError()
    }
    return user
  }
  async createUser(userData: СreateUserDTO): Promise<IUser> {
    const user = new User(userData)
    await user.save()
    return user
  }
}
