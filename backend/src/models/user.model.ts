import mongoose, { Document } from 'mongoose'

import { hashPassword } from '../utils/passwordUtils'

const { Schema } = mongoose


export interface IUser extends Document  {
    username: string
    password: string
    avatar: string,
    email:string,
    dataCreated: Date,
    dataUpdatedPassword: Date,
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
})

userScheme.pre('save', async function(next) {
    // on save hashed password
    const  hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    
    next();
});

export const User = mongoose.model<IUser>('User', userScheme)
