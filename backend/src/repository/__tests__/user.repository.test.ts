import {
  describe,
  expect,
  it,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals'
import mongoose from 'mongoose'

import connectToMongoDB from '../../models/connectToMongoDB'
import { comparePassword } from '../../utils/passwordUtils'
import { User } from '../../models/user.model'
import { UserRepository } from '../user.repository'
import { СreateUserDTO } from '../DTO/createUserDTO'
import { NotFoundError } from '../../errors/NotFoundError'

describe('User repository', () => {
  beforeAll(async () => {
    connectToMongoDB(true)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  afterEach(async () => {
    await User.deleteMany({})
  })

  it('should create and save a new user', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmail.com',
    }
    const createUserData = new СreateUserDTO(
      userData.username,
      userData.email,
      userData.password,
    )
    const userRepository = new UserRepository()
    const savedUser = await userRepository.createUser(createUserData)

    // Should create user
    expect(savedUser._id).toBeDefined()
    expect(savedUser.username).toBe(userData.username)

    // Should hashed password
    expect(savedUser.password).not.toBe(userData.password)

    // Should compare hashed password and plaintext password
    const isValidPassword = await comparePassword(
      userData.password,
      savedUser.password,
    )
    expect(isValidPassword).toBe(true)
  })

  it('should find user by username', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmail.com',
    }
    const userSaved = await new User(userData).save()
    const userRepository = new UserRepository()

    const user = await userRepository.getUserByUsername(userData.username)

    expect(user?._id).toEqual(userSaved._id)
  })
  it('should throw NotFoundError', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmail.com',
    }
    await new User(userData).save()
    const userRepository = new UserRepository()

    let error
    try {
      await userRepository.getUserByUsername('fake')
    } catch (e) {
      error = e
    }
    expect(error).toBeInstanceOf(NotFoundError)
  })
  it('should find user by email', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmail.com',
    }
    const userSaved = await new User(userData).save()
    const userRepository = new UserRepository()

    const user = await userRepository.getUserByEmail(userData.email)

    expect(user?._id).toEqual(userSaved._id)
  })
  it('should throw NotFoundError', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmail.com',
    }
    await new User(userData).save()
    const userRepository = new UserRepository()

    let error
    try {
      await userRepository.getUserByEmail('fake')
    } catch (e) {
      error = e
    }
    expect(error).toBeInstanceOf(NotFoundError)
  })
})
