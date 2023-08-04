import { Request, Response } from 'express'
import { NoteService } from '../services/note.service'
import { StatusCodes } from 'http-status-codes'

export const addTrash = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const slug = req.params.slug
  await noteService.addTrash(slug)
  res.status(StatusCodes.OK).send({
    message: `Note ${slug} added in trash`,
  })
}

export const removeTrash = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const slug = req.params.slug
  await noteService.removeTrash(slug)
  res.status(StatusCodes.OK).send({
    message: `Note ${slug} removed from trash`,
  })
}

export const addBookmark = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const slug = req.params.slug
  await noteService.addBookmark(slug)
  res.status(StatusCodes.OK).send({
    message: `Note ${slug} added in bookmark`,
  })
}

export const removeBookmark = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const slug = req.params.slug
  await noteService.removeBookmark(slug)
  res.status(StatusCodes.OK).send({
    message: `Note ${slug} removed in bookmark`,
  })
}
