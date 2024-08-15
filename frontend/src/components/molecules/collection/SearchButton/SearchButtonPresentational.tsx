import React from "react";
import { TFunction } from "i18next";

import { Icon, SideBarTool } from "@atoms/index";

import SearchIcon from "@public/Search.svg";

interface ISearchButtonPresentationalProps {
  onClick: Function;
  t: TFunction;
}

export const SearchButtonPresentational: React.FC<
  ISearchButtonPresentationalProps
> = ({ onClick, t }) => {
  return (
    <SideBarTool
      onClick={onClick}
      icon={<Icon icon={<SearchIcon />} />}
      text={t("search")}
    />
  );
};
