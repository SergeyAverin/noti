import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { ICell } from "@redux/types/cell";
import { INote } from "@redux/types/note";

interface INoteState {
  note: INote | undefined;
  content: ICell[];
  selectedCell: ICell | undefined;
  selectRangeStart: number;
  selectRangeEnd: number;
}

const initialState: INoteState = {
  note: undefined,
  selectedCell: undefined,
  selectRangeStart: 0,
  selectRangeEnd: 0,
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
        if (state.selectRangeStart == state.selectedCell.children.length) {
          const newCell = {
            children: "",
            id: uuidv4(),
            property: {},
            type: "string",
          };
          state.content.splice(selectedIndex + 1, 0, newCell);
        } else {
          const newCell = {
            children: state.selectedCell.children.slice(state.selectRangeStart),
            id: uuidv4(),
            property: {},
            type: "string",
          };
          state.selectedCell.children = state.selectedCell.children.slice(
            0,
            state.selectRangeStart
          );
          state.content.splice(selectedIndex + 1, 0, newCell);
        }
      }
    },
    selectNext(state, action: PayloadAction<void>) {
      if (state.selectedCell) {
        const selectedIndex = state.content.findIndex(
          (cell) => state.selectedCell?.id == cell.id
        );
        if (selectedIndex + 1 < state.content.length) {
          state.selectedCell = state.content[selectedIndex + 1];
        }
      }
    },
    selectPrev(state, action: PayloadAction<void>) {
      if (state.selectedCell) {
        const selectedIndex = state.content.findIndex(
          (cell) => state.selectedCell?.id == cell.id
        );
        if (selectedIndex - 1 >= 0) {
          state.selectedCell = state.content[selectedIndex - 1];
        }
      }
    },
    setSelectRange(
      state,
      action: PayloadAction<{ rangeStart: number; rangeEnd: number }>
    ) {
      state.selectRangeStart = action.payload.rangeStart;
      state.selectRangeEnd = action.payload.rangeEnd;
    },
  },
});

export default userSlice.reducer;

export const {
  setNote,
  selectCell,
  changeCellChildren,
  addCell,
  selectNext,
  selectPrev,
  setSelectRange,
} = userSlice.actions;
