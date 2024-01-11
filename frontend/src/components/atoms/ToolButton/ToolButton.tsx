import React from "react";

import { ToolButtonStyled } from "./ToolButtonStyled";

export interface IToolButtonProps extends React.PropsWithChildren {
  onClick: Function;
  isActive: boolean;
}

export const ToolButton: React.FC<IToolButtonProps> = ({
  children,
  onClick,
  isActive,
}) => {
  const onClickHandler = () => {
    onClick();
  };
  return (
    <ToolButtonStyled isActive={isActive} onClick={onClickHandler}>
      <div>{children}</div>
    </ToolButtonStyled>
  );
};
