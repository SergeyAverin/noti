import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { ICell } from "@redux/types/cell";
import { INote } from "@redux/types/note";

interface INoteState {
  note: INote | undefined;
  content: ICell[];
}

const initialState: INoteState = {
  note: undefined,
  content: [
    {
      children: "=",
      id: uuidv4(),
      property: {},
      type: "string",
    },
    {
      children: "666",
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
    changeCellChildren(
      state,
      action: PayloadAction<{ cellId: string; value: string }>
    ) {
      const cell = state.content.find(
        (cell) => action.payload.cellId == cell.id
      );
      if (cell) {
        cell.children = action.payload.value;
      }
    },
    addCell(
      state,
      action: PayloadAction<{ newCell: ICell; oldCellId: string }>
    ) {
      const selectedIndex = state.content.findIndex(
        (cell) => action.payload.oldCellId == cell.id
      );
      const newCell = {
        children: action.payload.newCell.children,
        id: action.payload.newCell.id,
        property: action.payload.newCell.property,
        type: action.payload.newCell.type,
      };
      state.content.splice(selectedIndex + 1, 0, newCell);
    },
    removeCell(state, action: PayloadAction<{ id: string }>) {
      state.content = state.content.filter(
        (cell) => cell.id !== action.payload.id
      );
    },
  },
});

export default userSlice.reducer;

export const { setNote, changeCellChildren, addCell, removeCell } =
  userSlice.actions;
