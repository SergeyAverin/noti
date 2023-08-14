import { Request, Response } from 'express'
import log4js from 'log4js'

import { NoteService } from '../services/note.service'
import { StatusCodes } from 'http-status-codes'

const logger = log4js.getLogger()

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

export const createNote = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const title = req.body.title
  const note = await noteService.createRootNote(title, res.locals.user)
  res.status(StatusCodes.CREATED).send(note)
}

export const getUsersNote = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const notes = await noteService.getUserNotes(res.locals.user)
  res.status(StatusCodes.OK).send(notes)
}

export const getUsersTrash = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const notes = await noteService.getUserTrash(res.locals.user)
  res.status(StatusCodes.OK).send(notes)
}

export const cleanUsersTrash = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  await noteService.cleanUserTrash(res.locals.user)
  res.status(StatusCodes.NO_CONTENT).end()
}

export const removeNoteFromTrash = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  await noteService.removeNoteFromTrash(req.params.slug)
  res.status(StatusCodes.NO_CONTENT).end()
}

export const removeNote = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  await noteService.removeNote(req.params.slug)
  res.status(StatusCodes.NO_CONTENT).end()
}

export const getUsersBookmark = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const notes = await noteService.getUserBookmark(res.locals.user)
  res.status(StatusCodes.OK).send(notes)
}

export const removeNoteFromBookmark = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  await noteService.removeNoteFromTrash(req.params.slug)
  res.status(StatusCodes.NO_CONTENT).end()
}

export const getRootNote = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const notes = await noteService.getRootNote(res.locals.user)
  res.status(StatusCodes.OK).send(notes)
}

export const getNoteBySlug = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  const note = await noteService.getNoteBySlug(req.params.slug)
  res.status(StatusCodes.OK).send(note)
}

export const uploadNote = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  logger.debug('Before noteService.uploadNoteContent')
  await noteService.uploadNoteContent(req.body, req.params.slug)
  logger.debug('After noteService.uploadNoteContent')
  res.status(StatusCodes.OK).send({ message: 'upload' })
}

export const loadNoteContent = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  logger.debug('Before noteService.loadNoteContent')
  const json = await noteService.loadNoteContent(req.params.slug)
  logger.debug('After noteService.loadNoteContent')
  res.status(StatusCodes.OK).send(json)
}

export const changeNoteTitle = async (req: Request, res: Response) => {
  const noteService = new NoteService()
  await noteService.changeNoteTitle(req.body.slug, req.body.title)
  res.status(StatusCodes.NO_CONTENT).end()
}
