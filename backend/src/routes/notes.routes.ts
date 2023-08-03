import express, { Router } from 'express'

import notesControllerfrom from '../controllers/notes.controller'
import { authorizationRequireMiddleware } from '../middlewares/authorizationRequireMiddleware'

const noteRoute: Router = express.Router()

noteRoute.use(authorizationRequireMiddleware)
noteRoute.route('').get((req, res) => notesControllerfrom.get(req, res))

export default noteRoute
