import { Note, INote } from '../models/note.model'
import { NotFoundError } from '../errors/NotFoundError'
import { UpdateNoteDTO } from './DTO/updateNoteDTO'

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
}
