import express, { Router } from 'express'

import noteRoute from './notes.routes'
import accountRouter from './account.routes'

const routes: Router = express.Router()
routes.use('/notes', noteRoute)
routes.use('/account', accountRouter)

export default routes
