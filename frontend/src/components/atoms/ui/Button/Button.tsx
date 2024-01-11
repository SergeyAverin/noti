import React from "react";

import { ButtonStyled } from "./ButtonStyled";

export interface IButtonProps extends React.PropsWithChildren {
  /** Callback function to be triggered when the button is clicked */
  onClick?: React.MouseEventHandler;

  /** This arg filled button's background */
  fill?: boolean;

  /** This arg changed button color to red   */
  danger?: boolean;
}

/** Button component. This component called callback function on click. */
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
  danger: false,
};
