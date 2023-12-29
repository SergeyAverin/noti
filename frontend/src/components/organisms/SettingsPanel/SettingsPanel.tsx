import React, { useState } from "react";

import { SettingsPanelTabsStyled } from "./SettingsPanelStyled";
import { Popup } from "@atoms/index";
import { AccountManagerItemStyled } from "@molecules/AccountManager";
import { SelectTheme } from "@molecules/SelectTheme/SelectTheme";


export const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <AccountManagerItemStyled onClick={clickHandler}>
        Setting
      </AccountManagerItemStyled>
      {isOpen && (
        <Popup closeFunction={clickHandler}>
          <SettingsPanelTabsStyled>sfd</SettingsPanelTabsStyled>
          <SelectTheme />
        </Popup>
      )}
    </>
  );
};
