import { RootState } from "@redux/store";

export const activeUserSelector = (state: RootState) =>
  state.userState.activeUser;
export const accountsSelector = (state: RootState) => state.userState.accounts;
