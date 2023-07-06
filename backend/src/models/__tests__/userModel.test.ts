import {
  describe,
  expect,
  it,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals'
import mongoose from 'mongoose'

import connectToMongoDB from '../connectToMongoDB'
import { comparePassword } from '../../utils/passwordUtils'
import { User } from '../user.model'

describe('User model', () => {
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
    const user = new User(userData)
    const savedUser = await user.save()
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

  it('should not save a user with invalid email', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmailcom',
    }
    const user = new User(userData)
    let error
    try {
      await user.save()
    } catch (e) {
      error = e
    }
    expect(error).toBeInstanceOf(mongoose.Error.ValidationError)
  })
})
