import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      property: {},
      type: "string",
    },
    {
      children: "tes3t",
      id: uuidv4(),
      property: {},
      type: "string",
    },
    {
      children: "test",
      id: uuidv4(),
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
    selectCell(state, action: PayloadAction<ICell>) {
      state.selectedCell = action.payload;
    },
    changeCellChildren(state, action: PayloadAction<string>) {
      if (state.selectedCell) {
        state.selectedCell.children = action.payload;
      }
    },
    addCell(state, action: PayloadAction<void>) {
      if (state.selectedCell) {
        const selectedIndex = state.content.findIndex(
          (cell) => state.selectedCell?.id == cell.id
        );
        const newCell = {
          children: "new test",
          id: uuidv4(),
          property: {},
          type: "string",
        };
        state.content.splice(selectedIndex + 1, 0, newCell);
      }
    },
  },
});

export default userSlice.reducer;

export const { setNote, selectCell, changeCellChildren, addCell } =
  userSlice.actions;
