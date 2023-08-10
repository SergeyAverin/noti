import {
  describe,
  expect,
  it,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals'
import mongoose from 'mongoose'

import connectToMongoDB from '../../models/connectToMongoDB'
import { Note } from '../../models/note.model'
import { NoteRepository } from '../note.repository'
import { UpdateNoteDTO } from '../DTO/updateNoteDTO'

describe('Note repository', () => {
  beforeAll(async () => {
    connectToMongoDB(true)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  afterEach(async () => {
    await Note.deleteMany({})
  })

  it('should find note by slug', async () => {
    const noteData = {
      title: 'NoteRepository',
    }
    const savedNote = await new Note(noteData).save()
    const noteRepository = new NoteRepository()
    const findedNote = noteRepository.getNoteBySlug(savedNote.slug)
    expect(findedNote).not.toBe(null)
  })

  it('should find note', async () => {
    const noteData = {
      title: 'NoteRepository',
    }
    const savedNote = await new Note(noteData).save()
    const noteRepository = new NoteRepository()
    const updateData = new UpdateNoteDTO()
    updateData.isTrash = true
    await noteRepository.updateBySlug(savedNote.slug, updateData)
    const findedNote = await noteRepository.getNoteBySlug(savedNote.slug)
    expect(findedNote.isTrash).toBe(true)
  })
})
