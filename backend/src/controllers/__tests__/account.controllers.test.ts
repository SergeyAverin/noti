import request from 'supertest'
import {
  describe,
  expect,
  it,
  afterEach,
  beforeAll,
  afterAll,
} from '@jest/globals'
import mongoose from 'mongoose'

import app from '../../app'
import { User } from '../../models/user.model'
import connectToMongoDB from '../../models/connectToMongoDB'

describe('GET /api/v1.0/account/login', () => {
  const userData = {
    username: 'accauntController',
    password: '123',
    email: 'accauntController@r.ru',
  }
  beforeAll(async () => {
    connectToMongoDB()
  })
  afterAll(async () => {
    await mongoose.connection.close()
  })
  afterEach(async () => {
    await User.deleteMany({ username: userData.username })
  })

  it('should return user and tokens', async () => {
    const user = new User(userData)
    await user.save()

    const res = await request(app)
      .post('/api/v1.0/account/login')
      .type('form')
      .send({
        email: userData.email,
        password: userData.password,
      })

    expect(res.statusCode).toBe(200)
  })

  it('should request 401 status', async () => {
    const user = new User(userData)
    await user.save()

    const res = await request(app)
      .post('/api/v1.0/account/login')
      .field('email', userData.email)
      .field('password', 'fakePassword')

    expect(res.statusCode).toBe(401)
  })
})
