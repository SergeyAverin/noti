import React from "react";

import { Width } from "@atoms/index";
import { SideBarToolStyled } from "./SideBarToolStyled";


export interface ISideBarToolProps {
  onClick: Function,
  icon: React.ReactNode,
  text: string
}
export const SideBarTool: React.FC<ISideBarToolProps> = ({onClick, icon, text}) => {
  return (
    <Width width="100%">
      <SideBarToolStyled  onClick={() => onClick()}>
        {icon}
        {text}
      </SideBarToolStyled>
    </Width>
  );
};
