import React from "react";

import { WidthStyled } from "./WidthStyled";

export interface IWidthProps extends React.PropsWithChildren {
  /** css width value */
  width: string;

  /** if true margin value is auto */
  isMarginAuto?: boolean;
}

/** This component added css width in wrapped content */
export const Width: React.FC<IWidthProps> = (props) => {
  return (
    <div data-testid="width">
      <WidthStyled {...props} />
    </div>
  );
};

Width.defaultProps = {
  isMarginAuto: false,
};
