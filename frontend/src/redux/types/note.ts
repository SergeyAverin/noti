import { IUser } from "./user";

export interface INote {
  title: string;
  slug: string;
  isTrash: boolean;
  isBookmark: boolean;
  metadata: {
    author: IUser;
    dataCreated: Date;
    dataUpdate: Date;
  };
  parentNote?: INote;
  childNotes?: [INote];
}
