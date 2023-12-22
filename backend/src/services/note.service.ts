import log4js from 'log4js'

import { NoteRepository } from '../repository/note.repository'
import { NotesEditorRepository } from '../repository/notesEditor.repository'
import { UpdateNoteDTO } from '../repository/DTO/updateNoteDTO'
import { CreateNoteDTO } from '../repository/DTO/createNoteDTO'
import { INote } from '../models/note.model'
import { IUser } from '../models/user.model'
import { ICell } from '../models/cell'
import { NotePermissionEnum } from '../constants/NotePermissionEnum'
import { NoteOperationsEnum } from '../constants/NoteOperationsEnum'
import { PermissionError } from '../errors/PermissionError'

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

  async getNoteBySlug(slug: string, user: IUser): Promise<INote> {
    const note = await this.noteRepository.getNoteBySlug(slug)
    // this.checkPermission(note, user, NoteOperationsEnum.READ)
    return note
  }

  async uploadNoteContent(content: string, slug: string, user: IUser) {
    const note = await this.getNoteBySlug(slug, user)
    //  this.checkPermission(note, user, NoteOperationsEnum.UPDATE)
    await this.noteEditorRepository.uploadNote(content, slug)
    await this.noteRepository.changeLastEditDate(slug)
  }
  async loadNoteContent(slug: string, user: IUser) {
    const note = await this.getNoteBySlug(slug, user)
    // this.checkPermission(note, user, NoteOperationsEnum.UPDATE)
    // this.checkPermission(note, user, NoteOperationsEnum.READ)
    const content = await this.noteEditorRepository.loadNote(slug)
    return content
  }
  async changeNoteTitle(slug: string, title: string) {
    const updateNoteData = new UpdateNoteDTO()
    updateNoteData.title = title
    await this.noteRepository.updateBySlug(slug, updateNoteData)
    await this.noteRepository.changeLastEditDate(slug)
  }
  async checkPermission(
    note: INote,
    user: IUser,
    operation: NoteOperationsEnum,
  ) {
    switch (note.metadata.permission) {
      case NotePermissionEnum.ALL_PERMISSION:
        throw new PermissionError()
        break
      case NotePermissionEnum.OWNER_ONLY:
        if (note.metadata.author != user) {
          throw new PermissionError()
        }
        break
      case NotePermissionEnum.OWNER_ONLY_OR_READ_ONLY:
        if (
          note.metadata.author != user &&
          operation != NoteOperationsEnum.READ
        ) {
          throw new PermissionError()
        }
        break
    }
  }
}
