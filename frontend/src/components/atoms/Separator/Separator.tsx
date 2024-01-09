import React from "react";

import { SeparatorStyled } from "./SeparatorStyled";

export interface ISeparatorProps {
  /** If true this component is horizontal  */
  isHorizontal?: boolean;
}

/** This component is separator line */
export const Separator: React.FC<ISeparatorProps> = (props) => {
  return (
    <div data-testid="separator">
      <SeparatorStyled {...props} />
    </div>
  );
};

Separator.defaultProps = {
  isHorizontal: false,
};
