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
    removeUser: (state, action: PayloadAction<IUser>) => {
      const indexToDelete = state.accounts.findIndex(
        (item) => item.email === action.payload.email
      );
      state.accounts.splice(indexToDelete, 1);
      localStorage.setItem("users", JSON.stringify(state.accounts));
    },
  },
});

export default userSlice.reducer;

export const { setActiveUser, setAccounts, removeUser } = userSlice.actions;
