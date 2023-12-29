import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DefaultTheme } from "styled-components";

import { darkTheme } from "../../styles/darkTheme";
import { lightTheme } from "../../styles/lightTheme";

interface IThemeState {
  theme: DefaultTheme;
}

const initialState: IThemeState = {
  theme: lightTheme,
};

export const themeSlice = createSlice({
  initialState,
  name: "themeSlice",
  reducers: {
    setTheme: (state, action: PayloadAction<DefaultTheme>) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;
