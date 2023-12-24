import { Request, Response } from 'express'
import log4js from 'log4js'
import { StatusCodes } from 'http-status-codes'

import { SearchService } from '../services/search.service'
import { SearchElasticsearchRepository } from '../repository/search.repository'
import { NotesEditorMinioRepository } from '../repository/notesEditor.repository'

const logger = log4js.getLogger()

export const search = async (req: Request, res: Response) => {
  const searhcRepository = new SearchElasticsearchRepository()
  const noteEditorRepository = new NotesEditorMinioRepository()
  const searchService = new SearchService(
    searhcRepository,
    noteEditorRepository,
  )
  searchService.search('d')
  res.status(StatusCodes.OK).send({
    message: `search`,
  })
}
