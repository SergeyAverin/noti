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
import { User } from '../user.model'
import { Token } from '../token.model'

describe('Token model', () => {
  beforeAll(async () => {
    connectToMongoDB(true)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  afterEach(async () => {
    await User.deleteMany({})
    await Token.deleteMany({})
  })

  it('should create token', async () => {
    const userData = {
      username: 'UserName',
      password: 'UserPassword',
      email: 'test@gmail.com',
    }
    const user = new User(userData)
    const savedUser = await user.save()
    const token = new Token({
      token: 'test',
    })
    const savedToken = await token.save()
    const userWithToken = await User.find({
      username: savedUser.username,
    }).populate('tokens')

    expect(savedToken._id).toBeDefined()
    expect(savedToken.token).toBe('test')

    // is user have token
    expect(userWithToken.length).toBe(1)
  })
})
