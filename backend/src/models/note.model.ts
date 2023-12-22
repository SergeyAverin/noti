import mongoose, { Document } from 'mongoose'
import crypto from 'crypto'
import slugify from 'slugify'

import { IUser } from './user.model'
import { NotePermissionEnum } from '../constants/NotePermissionEnum'

const { Schema } = mongoose

export interface INote extends Document {
  title: string;
  slug: string;
  isTrash: boolean;
  isBookmark: boolean;
  metadata: {
    author: IUser,
    dataCreated: Date,
    dataUpdate: Date,
    permission: NotePermissionEnum,
  };
  parentNote?: INote['_id'];
  childNotes?: [INote['_id']];
}

const noteScheme = new Schema<INote>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  isTrash: {
    type: Boolean,
    default: false,
  },
  isBookmark: {
    type: Boolean,
    default: false,
  },
  metadata: {
    dataCreated: {
      type: Date,
      required: true,
      default: new Date(),
    },
    dataUpdate: {
      type: Date,
      required: true,
      default: new Date(),
    },
    permission: {
      type: String,
      enum: NotePermissionEnum,
      default: NotePermissionEnum.OWNER_ONLY,
    },
  },
  parentNote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
  },
  childNotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note',
    },
  ],
})

noteScheme.pre<INote>('save', function (next) {
  if (this.isNew) {
    const uniqueId = crypto.randomBytes(15).toString('hex')
    this.slug = `${slugify(this.title, { lower: true })}-${uniqueId}`
  }
  next()
})

export const Note = mongoose.model<INote>('Note', noteScheme)
