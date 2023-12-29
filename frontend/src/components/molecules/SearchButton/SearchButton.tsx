import React from "react";

import { SideBarTool } from "@atoms/SideBarTools/SideBarTool";
import { Icon } from "@atoms/index";

import SearchIcon from "@public/Search.svg";


interface ISearchButtonProps {
  clickHeandler: Function
}

export const SearchButton: React.FC<ISearchButtonProps> = ({clickHeandler}) => {
  return (
    <SideBarTool onClick={clickHeandler} icon={<Icon icon={<SearchIcon />} />} text="Search" />
  );
};
