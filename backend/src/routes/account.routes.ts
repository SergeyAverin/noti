import express, { Router } from 'express'

import { login } from '../controllers/account.controllers'

const accountRouter: Router = express.Router()

// Auth
accountRouter.route('/login').post(login)

export default accountRouter
