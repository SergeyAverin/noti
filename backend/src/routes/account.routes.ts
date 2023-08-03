import express, { Router } from 'express'

import {
  login,
  logout,
  profile,
  registrationUserController,
} from '../controllers/account.controllers'
import { authorizationRequireMiddleware } from '../middlewares/authorizationRequireMiddleware'

const accountRouter: Router = express.Router()

// Auth
accountRouter.route('/login').post(login)
accountRouter.route('/registration').post(registrationUserController)
accountRouter.use(authorizationRequireMiddleware)
accountRouter.route('/logout').post(logout)
accountRouter.route('/profile').get(profile)

export default accountRouter
