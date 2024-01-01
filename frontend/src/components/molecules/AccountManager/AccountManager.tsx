import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  AccountManagerHeaderStyled,
  AccountManagerPanelStyled,
  AccountManagerStyled,
  AccountManagerItemStyled,
} from "./AccountManagerStyled";
import { Flex, Icon, Position, Separator, ToolButton } from "@atoms/index";
import { SettingsPanel } from "@organisms/SettingsPanel";
import { removeUser } from "@redux/features/userSlice";
import { activeUserSelector, accountsSelector } from "@redux/selectors/user";
import { IUser } from "@redux/types/user";
import { shortenString } from "@utils/shortenString";

import SelectIcon from "@public/SelectIcon.svg";
import UserIcon from "@public/UserIcon.svg";
import TrashIcon from '@public/TrashIcon.svg'
import { useLoadAccounts } from "@hooks/useLoadAccounts";


export const AccountManager: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeUser = useSelector(activeUserSelector);
  const accounts = useSelector(accountsSelector);
  const dispatch = useDispatch();

  useLoadAccounts();


  const clickHeandler = () => {
    setIsOpen((prev) => !prev);
  };
  const removeAccountHandler  = (user: IUser) => {
    dispatch(removeUser(user));
  }

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
                  <Flex justifyContent="flex-start" alignItems="center" >
                    {shortenString(user.username, 20)}
                  <ToolButton isActive={false} onClick={() => removeAccountHandler(user)}>
                    <Icon icon={<TrashIcon />} />
                  </ToolButton>
                  </Flex>
              </AccountManagerItemStyled>
            ))}
            <Separator isHorizontal={true} />
            <AccountManagerItemStyled>
              <Link to="/auth/login">add account</Link>
            </AccountManagerItemStyled>
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
