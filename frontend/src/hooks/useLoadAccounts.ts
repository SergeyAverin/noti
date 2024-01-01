import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveUser, setAccounts } from "@redux/features/userSlice";

export const useLoadAccounts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authUsersFromLocalStorage = localStorage.getItem("users");
    const activeUserFromLocalStorage = localStorage.getItem("activeUser");

    let authUsers = [];
    let activeUser = null;

    if (authUsersFromLocalStorage && activeUserFromLocalStorage) {
      authUsers = JSON.parse(authUsersFromLocalStorage);
      activeUser = JSON.parse(activeUserFromLocalStorage);
    }

    dispatch(setAccounts(authUsers));
    dispatch(setActiveUser(activeUser));
  }, []);
};
