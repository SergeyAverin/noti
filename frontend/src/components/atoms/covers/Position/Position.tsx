import React from "react";

import { PositionStyled } from "./PositionStyled";

export interface IPositionProps extends React.PropsWithChildren {
  /** css position value */
  position: string;

  /** css top value */
  top?: string;

  /** css right value */
  right?: string;

  /** css bottom value */
  bottom?: string;

  /** css left value */
  left?: string;

  /** css z-index value */
  zIndex?: number;
}

/** This component added css position in wrapped content */
export const Position: React.FC<IPositionProps> = (props) => {
  return (
    <div data-testid="position">
      <PositionStyled {...props} />
    </div>
  );
};

Position.defaultProps = {
  position: "static",
};
