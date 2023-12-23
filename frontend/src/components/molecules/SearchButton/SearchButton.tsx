import React from "react";

import { useCreateNoteMutation } from "@redux/api/noteApi";
import { SideBarTool } from "@atoms/SideBarTools/SideBarTool";

import SearchIcon from "@public/Search.svg";

export const SearchButton: React.FC = () => {
  const clickHeandler = () => {
    
  }
  return (
    <SideBarTool onClick={clickHeandler} icon={<SearchIcon />} text="Search" />
  );
};
