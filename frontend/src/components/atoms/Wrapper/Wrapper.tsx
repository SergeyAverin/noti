import React from "react";

import { WrapperStyled } from "./WrapperStyled";

/** This component adds indents to the header and sidebar*/
export const Wrapper: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div date-testid="wrapper">
      <WrapperStyled {...props} />
    </div>
  );
};
