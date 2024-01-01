import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

interface IUserState {
  activeUser: IUser | null;
  accounts: Array<IUser> | [];
}

const initialState: IUserState = {
  activeUser: null,
  accounts: [],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setActiveUser: (state, action: PayloadAction<IUser>) => {
      state.activeUser = action.payload;
    },
    setAccounts: (state, action: PayloadAction<Array<IUser>>) => {
      state.accounts = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setActiveUser, setAccounts } = userSlice.actions;
