import React from "react";

import { IconStyled } from "./IconStyled";

export interface IIconProps {
  /** SVG icon */
  icon: React.ReactNode;
}

/** This component added color in svg icons  */
export const Icon: React.FC<IIconProps> = ({ icon }) => {
  return <IconStyled>{icon}</IconStyled>;
};
