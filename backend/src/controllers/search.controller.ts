import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { SearchService } from '../services/search.service'
import { SearchElasticsearchRepository } from '../repository/search.repository'
import { NotesEditorMinioRepository } from '../repository/notesEditor.repository'
import log4js from 'log4js'

const logger = log4js.getLogger()

interface ISearchResponse {
  _source: {
    title: string,
    slug: string,
    content: string,
  };
}

export const search = async (req: Request, res: Response) => {
  // const searchRepository = new SearchElasticsearchRepository()
  // const noteEditorRepository = new NotesEditorMinioRepository()
  // const searchService = new SearchService(
  //   searchRepository,
  //   noteEditorRepository,
  // )

  //const data = await searchService.search(req.query.q as string) as Array<ISearchResponse>
  // const notes = []
  // for (const note of data) {
  //   notes.push(note._source)
  //   }
  // logger.debug(`searched data ${notes}`)
  res.status(StatusCodes.OK).send({
    notes: [],
  })
}
