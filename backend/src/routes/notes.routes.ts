import express, { Router } from 'express'

import {
  addBookmark,
  addTrash,
  createNote,
  removeBookmark,
  removeTrash,
} from '../controllers/notes.controller'
import { authorizationRequireMiddleware } from '../middlewares/authorizationRequireMiddleware'

const noteRoute: Router = express.Router()

noteRoute.use(authorizationRequireMiddleware)
// noteRoute.route('').get((req, res) => notesControllerfrom.get(req, res))
noteRoute.route('/').post((req, res) => createNote(req, res))
noteRoute.route('/:slug/trash').post((req, res) => addTrash(req, res))
noteRoute.route('/:slug/trash').delete((req, res) => removeTrash(req, res))
noteRoute.route('/:slug/bookmark').post((req, res) => addBookmark(req, res))
noteRoute
  .route('/:slug/bookmark')
  .delete((req, res) => removeBookmark(req, res))

export default noteRoute
