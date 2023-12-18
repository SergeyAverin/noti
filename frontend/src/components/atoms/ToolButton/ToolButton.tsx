import React from "react";

import { ToolButtonStyled } from "./ToolButtonStyled";

interface IToolButtonProps {
  children: React.ReactNode;
  onClick: Function;
  isActive: boolean;
}
export const ToolButton: React.FC<IToolButtonProps> = ({
  children,
  onClick,
  isActive,
}) => {
  const onClickHeandler = () => {
    onClick();
  };
  return (
    <ToolButtonStyled isActive={isActive} onClick={onClickHeandler}>
      <div>{children}</div>
    </ToolButtonStyled>
  );
};
