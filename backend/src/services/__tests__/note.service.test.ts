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
import { NoteService } from '../note.service'
import { NoteRepository } from '../../repository/note.repository'

describe('Note service', () => {
  beforeAll(async () => {
    connectToMongoDB(true)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  afterEach(async () => {
    await Note.deleteMany({})
  })

  it("should set true in note's isTrash", async () => {
    const noteData = {
      title: 'NoteService',
    }
    const savedNote = await new Note(noteData).save()
    const noteService = new NoteService()
    const noteRepository = new NoteRepository()
    await noteService.addTrash(savedNote.slug)
    const findedNote = await noteRepository.getNoteBySlug(savedNote.slug)
    expect(findedNote.isTrash).toBe(true)
  })

  it("should set false in note's isTrash", async () => {
    const noteData = {
      title: 'NoteService',
    }
    const savedNote = await new Note(noteData).save()
    const noteService = new NoteService()
    const noteRepository = new NoteRepository()
    await noteService.removeTrash(savedNote.slug)
    const findedNote = await noteRepository.getNoteBySlug(savedNote.slug)
    expect(findedNote.isTrash).toBe(false)
  })

  it("should set true in note's isBookmark", async () => {
    const noteData = {
      title: 'NoteService',
    }
    const savedNote = await new Note(noteData).save()
    const noteService = new NoteService()
    const noteRepository = new NoteRepository()
    await noteService.addBookmark(savedNote.slug)
    const findedNote = await noteRepository.getNoteBySlug(savedNote.slug)
    expect(findedNote.isBookmark).toBe(true)
  })

  it("should set false in note's isBookmark", async () => {
    const noteData = {
      title: 'NoteService',
    }
    const savedNote = await new Note(noteData).save()
    const noteService = new NoteService()
    const noteRepository = new NoteRepository()
    await noteService.removeBookmark(savedNote.slug)
    const findedNote = await noteRepository.getNoteBySlug(savedNote.slug)
    expect(findedNote.isBookmark).toBe(false)
  })
})
