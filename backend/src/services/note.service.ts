import { NoteRepository } from '../repository/note.repository'
import { UpdateNoteDTO } from '../repository/DTO/updateNoteDTO'
import { CreateNoteDTO } from '../repository/DTO/createNoteDTO'
import { INote } from '../models/note.model'
import { IUser } from '../models/user.model'

export class NoteService {
  noteRepository = new NoteRepository()

  async _setFlag(slug: string, flag: string, value: boolean) {
    const updateNoteData = new UpdateNoteDTO()
    /*
    Object.defineProperty(updateNoteData, flag, {
      value: value,
    })
    */
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
    user.notes = []
    await user.save()
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
}
