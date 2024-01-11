import React from "react";

import { SideBarTool } from "@atoms/ui/SideBarTools/SideBarTool";
import { Icon } from "@atoms/index";

import SearchIcon from "@public/Search.svg";
import { useTranslation } from "react-i18next";


interface ISearchButtonProps {
  clickHeandler: Function
}

export const SearchButton: React.FC<ISearchButtonProps> = ({clickHeandler}) => {
  const { t } = useTranslation()
  return (
    <SideBarTool onClick={clickHeandler} icon={<Icon icon={<SearchIcon />} />} text={t('search')} />
  );
};
