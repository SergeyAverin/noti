import { IToken } from "./token";

export interface IUser {
  username: string;
  password: string;
  avatar: string;
  email: string;
  dataCreated: Date;
  dataUpdatedPassword: Date;
  token: string;
}
