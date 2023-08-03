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
          <AccountManagerItemStyled>
            <Link to="/auth/logout">Logout</Link>
          </AccountManagerItemStyled>
        </AccountManagerPanelStyled>
      )}
    </AccountManagerStyled>
  );
};
