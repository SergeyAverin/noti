import mongoose, { Document } from 'mongoose'

import { hashPassword, comparePassword } from '../utils/passwordUtils'
import { IToken } from './token.model'

const { Schema } = mongoose


export interface IUser extends Document  {
    username: string
    password: string
    avatar: string,
    email:string,
    dataCreated: Date,
    dataUpdatedPassword: Date,
    tokens: [IToken]
}

const userScheme = new Schema<IUser>({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // valid email regex
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    },
    dataCreated: {
        type: Date,
        required: true,
        default: new Date()
    },
    dataUpdatedPassword: {
        type: Date,
        required: true,
        default: new Date()
    },
    tokens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Token' }],
})

userScheme.pre('save', async function(next) {
    // on save hashed password
    if (this.isNew) {
        const  hashedPassword = await hashPassword(this.password);
        this.password = hashedPassword;
    }
    
    next();
});

export const User = mongoose.model<IUser>('User', userScheme)
