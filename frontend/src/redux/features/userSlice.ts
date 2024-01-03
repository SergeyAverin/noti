import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

interface IUserState {
  activeUser: IUser | null;
  accounts: Array<{ user: IUser; token: string }> | [];
}

const initialState: IUserState = {
  activeUser: null,
  accounts: [],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setActiveUser: (
      state,
      action: PayloadAction<{ user: IUser; token: string | null }>
    ) => {
      const user = action.payload.user;
      state.activeUser = user;
      localStorage.setItem("activeUser", JSON.stringify(user));
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },
    setAccounts: (
      state,
      action: PayloadAction<Array<{ user: IUser; token: string }>>
    ) => {
      state.accounts = action.payload;
    },
    removeUser: (state, action: PayloadAction<IUser>) => {
      const indexToDelete = state.accounts.findIndex(
        (item) => item.user.email === action.payload.email
      );
      state.accounts.splice(indexToDelete, 1);
      localStorage.setItem("users", JSON.stringify(state.accounts));
    },
  },
});

export default userSlice.reducer;

export const { setActiveUser, setAccounts, removeUser } = userSlice.actions;
