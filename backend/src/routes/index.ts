import express, { Router } from 'express'

import noteRoute from './notes.routes'
import accountRouter from './account.routes'
import searchRoute from './search.routes'

const routes: Router = express.Router()
routes.use('/notes', noteRoute)
routes.use('/account', accountRouter)
routes.use('/search', searchRoute)

export default routes
