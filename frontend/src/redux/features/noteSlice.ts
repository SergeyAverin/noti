import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICell } from "@redux/types/cell";
import { INote } from "@redux/types/note";

interface INoteState {
  note: INote | undefined;
  content: ICell[];
  selectedCell: ICell | undefined;
  cursorPosition: number | null;
}

const initialState: INoteState = {
  note: undefined,
  selectedCell: undefined,
  cursorPosition: 0,
  content: [
    {
      id: 1,
      type: "string",
      property: {},
      children: "_",
    },
  ],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {},
});

export default userSlice.reducer;

export const {} = userSlice.actions;
