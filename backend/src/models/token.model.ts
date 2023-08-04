import mongoose, { Document } from 'mongoose'

const { Schema } = mongoose

export interface IToken extends Document {
  token: string;
  dataCreated: Date;
}

const tokenScheme = new Schema<IToken>({
  token: {
    type: String,
    required: true,
  },
  dataCreated: {
    type: Date,
    required: true,
    default: new Date(),
  },
})

export const Token = mongoose.model<IToken>('Token', tokenScheme)
