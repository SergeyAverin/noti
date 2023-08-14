import log4js from 'log4js'

import { NoteRepository } from '../repository/note.repository'
import { NotesEditorRepository } from '../repository/notesEditor.repository'
import { UpdateNoteDTO } from '../repository/DTO/updateNoteDTO'
import { CreateNoteDTO } from '../repository/DTO/createNoteDTO'
import { INote } from '../models/note.model'
import { IUser } from '../models/user.model'
import { ICell } from '../models/cell'

const logger = log4js.getLogger()

export class NoteService {
  noteRepository = new NoteRepository()
  noteEditorRepository = new NotesEditorRepository()

  async _setFlag(slug: string, flag: string, value: boolean) {
    const updateNoteData = new UpdateNoteDTO()
    updateNoteData[flag] = value
    await this.noteRepository.updateBySlug(slug, updateNoteData)
  }

  async addTrash(slug: string) {
    await this._setFlag(slug, 'isTrash', true)
  }
  async removeTrash(slug: string) {
    await this._setFlag(slug, 'isTrash', false)
  }
  async addBookmark(slug: string) {
    await this._setFlag(slug, 'isBookmark', true)
  }
  async removeBookmark(slug: string) {
    await this._setFlag(slug, 'isBookmark', false)
  }
  async createRootNote(title: string, user: IUser): Promise<INote> {
    const noteData = new CreateNoteDTO(title)
    const note = await this.noteRepository.createNote(noteData)
    user.notes.push(note)
    await user.save()
    return note
  }
  async getUserNotes(user: IUser): Promise<INote[]> {
    const note = await this.noteRepository.getUserNotes(user)
    return note
  }
  async getUserTrash(user: IUser): Promise<INote[]> {
    const note = await this.noteRepository.getUserNotes(user)
    const trash = note.filter((note) => note.isTrash)
    return trash
  }

  async getUserBookmark(user: IUser): Promise<INote[]> {
    const note = await this.noteRepository.getUserNotes(user)
    const trash = note.filter((note) => note.isBookmark)
    return trash
  }

  async cleanUserTrash(user: IUser) {
    const trash = await this.getUserTrash(user)
    trash.forEach((note) => {
      this.removeNote(note.slug)
    })
  }

  async removeNoteFromTrash(slug: string) {
    await this.removeTrash(slug)
  }
  async removeNoteFromBookmark(slug: string) {
    await this.removeBookmark(slug)
  }

  async removeNote(slug: string) {
    await this.noteRepository.removeNote(slug)
  }

  async getRootNote(user: IUser) {
    const note = await this.noteRepository.getUserNotes(user)
    const trash = note.filter((note) => note.parentNote == undefined)
    return trash
  }

  async getNoteBySlug(slug: string): Promise<INote> {
    return await this.noteRepository.getNoteBySlug(slug)
  }

  async uploadNoteContent(content: ICell[], slug: string) {
    logger.debug('Before noteEditorRepository.uploadNote')
    await this.noteEditorRepository.uploadNote(content, slug)
    logger.debug('After noteEditorRepository.uploadNote')
  }
  async loadNoteContent(slug: string) {
    logger.debug('Before noteEditorRepository.loadNote')
    const json = await this.noteEditorRepository.loadNote(slug)
    logger.debug('After noteEditorRepository.loadNote')
    return json
  }
  async changeNoteTitle(slug: string, title: string) {
    const updateNoteData = new UpdateNoteDTO()
    updateNoteData.title = title
    await this.noteRepository.updateBySlug(slug, updateNoteData)
  }
}
