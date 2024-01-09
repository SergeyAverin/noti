import React from "react";
import { MarginStyled } from "./MarginStyled";

export interface IMarginProps extends React.PropsWithChildren {
  /** css margin-top */
  mt?: Number;

  /** css margin-left */
  ml?: Number;
  
  /** css margin-right */
  mr?: Number;

  /** css margin-bottom */
  mb?: Number;
}

/** This component added margin direction in wrapped content */
export const Margin: React.FC<IMarginProps> = (props) => {
  return <MarginStyled {...props} />;
};

Margin.defaultProps = {
  mt: 0,
  ml: 0,
  mr: 0,
  mb: 0,
};
