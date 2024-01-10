import React from "react";

import { FlexStyled } from "./FlexStyled";

export interface IFlexProps extends React.PropsWithChildren {
  /** This props is justifyContent of css */
  justifyContent: string;

  /** This props is alignItems of css */
  alignItems: string;

  /** This props is flexDirection of css */
  flexDirection?: string;
}

/** This component added flex direction in wrapped content */
export const Flex: React.FC<IFlexProps> = (props) => {
  return <FlexStyled {...props} />;
};

Flex.defaultProps = {
  flexDirection: "row",
};
