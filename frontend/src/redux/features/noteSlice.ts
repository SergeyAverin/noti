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
    { id: 1, type: "string", props: {}, children: "test1" },
    { id: 2, type: "chekbox", props: {}, children: "test2" },
    { id: 3, type: "string", props: {}, children: "test3" },
    { id: 4, type: "string", props: {}, children: "test4" },
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
      console.log(action.payload);
      state.cursorPosition = action.payload;
    },

    pushCell(state, action: PayloadAction<void>) {
      if (
        state.selectedCell?.id == state.content[state.content.length - 1].id
      ) {
        state.content.push({
          id: state.content.length + 1,
          type: "string",
          props: {},
          children: "",
        });
      }
    },
  },
});

export default userSlice.reducer;

export const { changeCell, pushCell, selectCell, setCursorPosition } =
  userSlice.actions;
