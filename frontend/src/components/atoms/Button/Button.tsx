import React from "react";

import { ButtonStyled } from "./ButtonStyled";

export interface IButtonProps {
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  fill?: boolean;
  danger?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  fill,
  danger,
}) => {
  return (
    <ButtonStyled onClick={onClick} danger={danger} fill={fill}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  fill: false,
  danger: false
}
