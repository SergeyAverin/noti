import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

import { ICell } from "@redux/types/cell";

interface INoteState {
  title: string;
  slug: string;
  content: ICell[];
}

const initialState: INoteState = {
  title: "Title",
  slug: "Slug",
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
  },
});

export default userSlice.reducer;

export const { changeCell } = userSlice.actions;
