import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

import { ICell } from "@redux/types/cell";

interface INoteState {
  title: string;
  slug: string;
  content: ICell[];
  selectedCell: ICell | undefined;
  cursorPosition: number | null;
}

const initialState: INoteState = {
  title: "Title",
  slug: "Slug",
  selectedCell: undefined,
  cursorPosition: 0,
  content: [
    {
      id: 1,
      type: "heading",
      property: { variant: "big", color: "red" },
      children: "_",
    },
    { id: 2, type: "heading", property: { variant: "medium" }, children: "_" },
    { id: 3, type: "heading", property: { variant: "small" }, children: "_" },
    { id: 4, type: "line", property: { color: "red" }, children: "" },
    { id: 4, type: "list", property: { color: "red" }, children: "ddd" },
  ],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    changeCell(state, action: PayloadAction<{ value: string; id: number }>) {
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

    setNote(state, action: PayloadAction<ICell[]>) {
      if (action.payload.length > 0) {
        state.content = action.payload;
      }
    },

    pushCell(state, action: PayloadAction<void>) {
      if (
        state.selectedCell?.id == state.content[state.content.length - 1].id ||
        state.content.length == 0
      ) {
        state.content.push({
          id: state.content.length + 1,
          type: "string",
          property: {},
          children: "",
        });
      }
    },
  },
});

export default userSlice.reducer;

export const { changeCell, pushCell, selectCell, setCursorPosition, setNote } =
  userSlice.actions;
