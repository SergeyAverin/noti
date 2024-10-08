import express, { Router } from 'express'

import {
  addBookmark,
  addTrash,
  cleanUsersTrash,
  createNote,
  getUsersBookmark,
  getUsersNote,
  getUsersTrash,
  removeBookmark,
  removeNote,
  removeNoteFromBookmark,
  removeNoteFromTrash,
  removeTrash,
  getRootNote,
  getNoteBySlug,
  uploadNote,
  loadNoteContent,
  changeNoteTitle,
} from '../controllers/notes.controller'
import { authorizationRequireMiddleware } from '../middlewares/authorizationRequireMiddleware'

const noteRoute: Router = express.Router()

noteRoute.use(authorizationRequireMiddleware)
noteRoute.route('/').get((req, res) => getUsersNote(req, res))
noteRoute.route('/').post((req, res) => createNote(req, res))

noteRoute.route('/root').get((req, res) => getRootNote(req, res))

noteRoute.route('/trash').get((req, res) => getUsersTrash(req, res))
noteRoute.route('/trash').delete((req, res) => cleanUsersTrash(req, res))
noteRoute.route('/:slug/trash').post((req, res) => addTrash(req, res))
noteRoute.route('/:slug/trash').delete((req, res) => removeTrash(req, res))
noteRoute
  .route('/trash/:slug')
  .post((req, res) => removeNoteFromTrash(req, res))
noteRoute.route('/trash/:slug').delete((req, res) => removeNote(req, res))

noteRoute.route('/bookmark').get((req, res) => getUsersBookmark(req, res))
noteRoute
  .route('/bookmark/:slug')
  .post((req, res) => removeNoteFromBookmark(req, res))
noteRoute.route('/:slug/bookmark').post((req, res) => addBookmark(req, res))
noteRoute
  .route('/:slug/bookmark')
  .delete((req, res) => removeBookmark(req, res))

noteRoute.route('/:slug').get((req, res) => getNoteBySlug(req, res))
noteRoute.route('/:slug').patch((req, res) => changeNoteTitle(req, res))

noteRoute.route('/:slug/content').get((req, res) => loadNoteContent(req, res))
noteRoute.route('/:slug/content').post((req, res) => uploadNote(req, res))

export default noteRoute
