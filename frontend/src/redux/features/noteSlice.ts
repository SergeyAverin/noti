import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import {
  CellPropertyColor,
  CellStyleMode,
  CellTypeEnum,
  ICell,
} from "@redux/types/cell";
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
      property: {
        color: CellPropertyColor.BLUE,
        styleMode: CellStyleMode.BACKGROUND,
      },
      type: "heading_large",
    },
  ],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    changeCellPosition(
      state,
      action: PayloadAction<{ cell: ICell; index: number }>
    ) {
      let arr = state.content;
      const draggable_cell = action.payload.cell;
      const index = action.payload.index;
      arr = arr.filter((item: ICell) => item.id != draggable_cell.id);
      let left_cells = arr.slice(0, index);
      let right_cells = arr.slice(index);
      state.content = [...left_cells, draggable_cell, ...right_cells];
    },
    setNote(state, action: PayloadAction<INote>) {
      state.note = action.payload;
    },
    setContent(state, action: PayloadAction<ICell[]>) {
      state.content = action.payload;
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
    changeProperty(
      state,
      action: PayloadAction<{ cellId: string; property: object }>
    ) {
      const cell = state.content.find(
        (cell) => action.payload.cellId == cell.id
      );
      if (cell) {
        cell.property = action.payload.property;
      }
    },
    changeCellType(
      state,
      action: PayloadAction<{ cellId: string; cellType: CellTypeEnum }>
    ) {
      const cell = state.content.find(
        (cell) => action.payload.cellId == cell.id
      );
      if (cell) {
        cell.type = action.payload.cellType;
      }
    },
  },
});

export default userSlice.reducer;

export const {
  setNote,
  changeCellChildren,
  addCell,
  removeCell,
  changeProperty,
  changeCellType,
  changeCellPosition,
  setContent,
} = userSlice.actions;
