import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

interface IUserState {
  activeUser: IUser | null;
}

const initialState: IUserState = {
  activeUser: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setActiveUser: (state, action: PayloadAction<IUser>) => {
      state.activeUser = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setActiveUser } = userSlice.actions;
