import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AccountManagerHeaderStyled,
  AccountManagerPanelStyled,
  AccountManagerStyled,
  AccountManagerItemStyled,
} from "./AccountManagerStyled";

import SelectIcon from "@public/SelectIcon.svg";
import UserIcon from "@public/UserIcon.svg";
import { Position, Width } from "@atoms/index";

export const AccountManager: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHeandler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <AccountManagerStyled>
      <AccountManagerHeaderStyled onClick={clickHeandler}>
        <UserIcon />
        Username
        <SelectIcon />
      </AccountManagerHeaderStyled>
      {isOpen && (
        <AccountManagerPanelStyled>
          <Position position="absolute" top="0">
              <AccountManagerItemStyled>
                <Link to="/auth/logout">Logout</Link>
              </AccountManagerItemStyled>
              <AccountManagerItemStyled>
                <Link to="/auth/logout">Settings</Link>
              </AccountManagerItemStyled>
          </Position>
        </AccountManagerPanelStyled>
      )}
    </AccountManagerStyled>
  );
};
