import express, { Router } from 'express'

import { authorizationRequireMiddleware } from '../middlewares/authorizationRequireMiddleware'
import { search } from '../controllers/search.controller'

const searchRoute: Router = express.Router()

// searchRoute.use(authorizationRequireMiddleware)
searchRoute.route('/').get((req, res) => search(req, res))

export default searchRoute
