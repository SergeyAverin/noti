import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  AccountManagerHeaderStyled,
  AccountManagerPanelStyled,
  AccountManagerStyled,
  AccountManagerItemStyled,
} from "./AccountManagerStyled";
import { Icon, Position, Separator } from "@atoms/index";
import { SettingsPanel } from "@organisms/SettingsPanel";
import { setAccounts, setActiveUser } from "@redux/features/userSlice";
import { activeUserSelector, accountsSelector } from "@redux/selectors/user";
import { shortenString } from "@utils/shortenString";

import SelectIcon from "@public/SelectIcon.svg";
import UserIcon from "@public/UserIcon.svg";

export const AccountManager: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeUser = useSelector(activeUserSelector);
  const accounts = useSelector(accountsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const authUsersFromLocalStorage = localStorage.getItem("users");
    const activeUserFromLocalStorage = localStorage.getItem("activeUser");
    let authUsers = [];
    let activeUser = null
    if (authUsersFromLocalStorage) {
      authUsers = JSON.parse(authUsersFromLocalStorage);
    }
    if (activeUserFromLocalStorage) {
      activeUser = JSON.parse(activeUserFromLocalStorage);
    }
    dispatch(setAccounts(authUsers));
    dispatch(setActiveUser(activeUser));
  }, []);

  const clickHeandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccountManagerStyled>
      <AccountManagerHeaderStyled onClick={clickHeandler}>
        <Icon icon={<UserIcon />} />
        {activeUser && shortenString(activeUser.username, 15)}
        <Icon icon={<SelectIcon />} />
      </AccountManagerHeaderStyled>
      {isOpen && (
        <AccountManagerPanelStyled>
          <Position position="absolute" top="0">
            {accounts.map((user) => (
              <AccountManagerItemStyled>
                <Link to="/auth/logout">{shortenString(user.username, 20)}</Link>
              </AccountManagerItemStyled>
            ))}
            <Separator isHorizontal={true} />
            <AccountManagerItemStyled>
              <Link to="/auth/logout">logout</Link>
            </AccountManagerItemStyled>
            <SettingsPanel />
          </Position>
        </AccountManagerPanelStyled>
      )}
    </AccountManagerStyled>
  );
};
