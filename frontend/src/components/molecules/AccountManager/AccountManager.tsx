import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AccountManagerHeaderStyled,
  AccountManagerPanelStyled,
  AccountManagerStyled,
  AccountManagerItemStyled,
} from "./AccountManagerStyled";
import { Icon, Position } from "@atoms/index";
import { SettingsPanel } from "@organisms/SettingsPanel";

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
        <Icon icon={<UserIcon />} />
        Username
        <Icon icon={<SelectIcon />} />
      </AccountManagerHeaderStyled>
      {isOpen && (
        <AccountManagerPanelStyled>
          <Position position="absolute" top="0">
              <AccountManagerItemStyled>
                <Link to="/auth/logout">Logout</Link>
              </AccountManagerItemStyled>
              <SettingsPanel />
          </Position>
        </AccountManagerPanelStyled>
      )}
    </AccountManagerStyled>
  );
};
