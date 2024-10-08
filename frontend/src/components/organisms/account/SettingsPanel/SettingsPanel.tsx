import React, { useState } from "react";

import { SettingsPanelTabsStyled } from "./SettingsPanelStyled";
import { Icon, Popup } from "@atoms/index";
import { AccountManagerItemStyled } from "@molecules/account/AccountManager";
import SelectTheme  from "@molecules/account/SelectTheme";
import SelectLanguage from "@molecules/account/SelectLanguage";
import { useTranslation } from "react-i18next";
import { SideBarTool } from "@atoms/ui/SideBarTools/SideBarTool";

import SettingsIcon from '@public/SettingsIcon.svg'


export const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <SideBarTool onClick={clickHandler} icon={<Icon icon={<SettingsIcon />} />} text={t('setting')} />

      {isOpen && (
        <Popup onClose={clickHandler}>

          <SelectTheme />
          <SelectLanguage />
        </Popup>
      )}
    </>
  );
};
// <SettingsPanelTabsStyled>sfd</SettingsPanelTabsStyled>
