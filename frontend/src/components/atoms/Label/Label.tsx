import React from "react";

import { LabelStyled } from "./LabelStyled";

export interface ILabelProps extends React.PropsWithChildren {
  /** Html attribute 'for' in label tag */
  htmlFor?: string;

  /** Callback function to be triggered when the button is clicked */
  onClick?: React.MouseEventHandler;
}

/** This component is label to input */
export const Label: React.FC<ILabelProps> = ({
  children,
  htmlFor,
  onClick,
}) => {
  return (
    <LabelStyled htmlFor={htmlFor} onClick={onClick}>
      {children}
    </LabelStyled>
  );
};
