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
      children: "test",
      id: 1,
      property: {},
      type: "string",
    },
    {
      children: "tes3t",
      id: 1,
      property: {},
      type: "string",
    },
    {
      children: "test",
      id: 1,
      property: {},
      type: "string",
    },
  ],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setNote(state, action: PayloadAction<INote>) {
      state.note = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setNote } = userSlice.actions;
