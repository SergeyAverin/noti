import React, { useState } from "react";

import { SettingsPanelTabsStyled } from "./SettingsPanelStyled";
import { Popup } from "@atoms/index";
import { AccountManagerItemStyled } from "@molecules/AccountManager";
import { SelectTheme } from "@molecules/SelectTheme/SelectTheme";
import { SelectLanguage } from "@molecules/SelectLanguage";
import { useTranslation } from "react-i18next";


export const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <AccountManagerItemStyled onClick={clickHandler}>
        { t('setting') }
      </AccountManagerItemStyled>
      {isOpen && (
        <Popup closeFunction={clickHandler}>

          <SelectTheme />
          <SelectLanguage />
        </Popup>
      )}
    </>
  );
};
// <SettingsPanelTabsStyled>sfd</SettingsPanelTabsStyled>
