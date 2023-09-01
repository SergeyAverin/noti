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
  reducers: {
    changeCell(state, action: PayloadAction<{ value: string; id: number }>) {
      //const cell = state.content.find((item) => item.id == action.payload.id);

      const cell = state.content.find((item) => item.id == action.payload.id);
      if (cell) {
        cell.children = action.payload.value;
      }
    },

    selectCell(state, action: PayloadAction<number>) {
      const cell = state.content.find((cell) => cell.id == action.payload);
      state.selectedCell = cell;
    },

    setCursorPosition(state, action: PayloadAction<number | null>) {
      state.cursorPosition = action.payload;
    },

    setContent(state, action: PayloadAction<ICell[]>) {
      if (action.payload.length > 0) {
        state.content = action.payload;
      }
    },

    setNote(state, action: PayloadAction<INote>) {
      state.note = action.payload;
    },

    editProperty(
      state,
      action: PayloadAction<{ property: object; id: number }>
    ) {
      const cell = state.content.find((cell) => cell.id == action.payload.id);
      if (cell) {
        cell.property = action.payload.property;
      }
    },

    removeCell(state, action: PayloadAction<{ id: number }>) {
      state.content = state.content.filter(
        (cell) => cell.id !== action.payload.id
      );
    },

    addCell(state, action: PayloadAction<{ id: number }>) {
      console.log(state.content);
    },

    pushCell(state, action: PayloadAction<{ cell: ICell; isMenu: boolean }>) {
      if (state.selectedCell?.id) {
        let firstPart = state.content.slice(0, state.selectedCell.id);
        let secondPart = state.content.slice(state.selectedCell.id);
        secondPart.unshift({
          id: state.content.length + 1,
          type: action.payload.cell.type,
          property: action.payload.cell.property,
          children: action.payload.cell.children,
        });
        state.content = firstPart.concat(secondPart);
      }
      if (
        state.selectedCell?.id == state.content[state.content.length - 1].id ||
        state.content.length == 0 ||
        action.payload.isMenu
      ) {
        state.content.push({
          id: state.content.length + 1,
          type: action.payload.cell.type,
          property: action.payload.cell.property,
          children: action.payload.cell.children,
        });
      }
    },
  },
});

export default userSlice.reducer;

export const {
  changeCell,
  pushCell,
  selectCell,
  setCursorPosition,
  setContent,
  editProperty,
  removeCell,
  setNote,
} = userSlice.actions;
