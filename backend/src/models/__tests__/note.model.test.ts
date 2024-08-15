import {
  describe,
  expect,
  it,
  beforeAll,
  afterAll,
  afterEach,
} from '@jest/globals'
import mongoose from 'mongoose'

import connectToMongoDB from '../connectToMongoDB'
import { Note } from '../note.model'

describe('Note model', () => {
  beforeAll(async () => {
    connectToMongoDB(true)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  afterEach(async () => {
    await Note.deleteMany({})
  })

  it('should create note', async () => {
    const noteData = {
      title: 'NoteModel',
    }
    const savedNote = await new Note(noteData).save()

    expect(savedNote._id).toBeDefined()
    expect(savedNote.title).toBe(noteData.title)
  })
})
