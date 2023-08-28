import React from "react";

import { TooltipStyled, TooltipWrapperStyled } from "./TooltipStyled";
import { TooltipPlacement } from "./TooltipPlacement";

interface ITooltipProps {
  children: React.ReactNode;
}

export const Tooltip: React.FC<ITooltipProps> = ({ children }) => {
  return (
    <TooltipWrapperStyled placement={TooltipPlacement.RIGHT}>
      {children}
      <TooltipStyled placement={TooltipPlacement.RIGHT}>This is a tooltip</TooltipStyled>
    </TooltipWrapperStyled>
  );
};
