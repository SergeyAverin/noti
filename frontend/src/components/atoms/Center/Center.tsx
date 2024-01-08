import React, { Children } from "react";

import { CenterStyled } from "./CenterStyled";

export interface ICenterProps extends React.PropsWithChildren {
  /** This prop alignment by horizontal */
  horizontal?: true;

  /** This prop alignment by vertical */
  vertical?: true;
}

/** Center component. This component align content */
export const Center: React.FC<ICenterProps> = ({
  children,
  horizontal,
  vertical,
}) => {
  return (
    <CenterStyled horizontal={horizontal} vertical={vertical}>
      {children}
    </CenterStyled>
  );
};

CenterStyled.defaultProps = {
  horizontal: true,
  vertical: true,
};
