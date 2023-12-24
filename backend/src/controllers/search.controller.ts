import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { SearchService } from '../services/search.service'
import { SearchElasticsearchRepository } from '../repository/search.repository'
import { NotesEditorMinioRepository } from '../repository/notesEditor.repository'



export const search = async (req: Request, res: Response) => {
  const searhcRepository = new SearchElasticsearchRepository()
  const noteEditorRepository = new NotesEditorMinioRepository()
  const searchService = new SearchService(
    searhcRepository,
    noteEditorRepository,
  )

  const data = await searchService.search(req.query.q as string) as []
  res.status(StatusCodes.OK).send({
    notes: data,
  })
}
