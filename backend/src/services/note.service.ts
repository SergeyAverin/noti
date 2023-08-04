import { NoteRepository } from '../repository/note.repository'
import { UpdateNoteDTO } from '../repository/DTO/updateNoteDTO'

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
}
