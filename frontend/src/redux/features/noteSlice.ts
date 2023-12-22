import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { INote } from "@redux/types/note";

interface INoteState {
  note: INote | undefined;
  content: string;
}

const initialState: INoteState = {
  note: undefined,
  content: "",
};

export const noteSlice = createSlice({
  initialState,
  name: "noteSlice",
  reducers: {
    setNote(state, action: PayloadAction<INote>) {
      state.note = action.payload;
    },
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
});

export default noteSlice.reducer;

export const { setNote, setContent } = noteSlice.actions;
