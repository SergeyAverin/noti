import { Note, INote } from '../models/note.model'
import { NotFoundError } from '../errors/NotFoundError'
import { UpdateNoteDTO } from './DTO/updateNoteDTO'
import { CreateNoteDTO } from './DTO/createNoteDTO'
import log4js from 'log4js'
import { IUser } from '../models/user.model'

const logger = log4js.getLogger()

export class NoteRepository {
  async getNoteBySlug(slug: string): Promise<INote> {
    const note = await Note.findOne({ slug: slug })
    if (!note) {
      throw new NotFoundError()
    }
    return note
  }
  async updateBySlug(
    slug: string,
    updatedFields: Partial<UpdateNoteDTO>,
  ): Promise<void> {
    const fieldsToUpdate = {
      ...updatedFields,
    }
    await Note.updateOne({ slug: slug }, fieldsToUpdate)
  }
  async createNote(noteField: CreateNoteDTO): Promise<INote> {
    const note = await new Note(noteField).save()
    return note
  }
  async getUserNotes(user: IUser): Promise<[INote]> {
    const userNote = await user.populate('notes')
    return userNote.notes
  }
}
