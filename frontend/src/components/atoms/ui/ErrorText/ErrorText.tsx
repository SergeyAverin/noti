import React from "react";

import { ErrorTextStyled } from "./ErrorTextStyled";

/** This component contains text with an error */
export const ErrorText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ErrorTextStyled>{children}</ErrorTextStyled>;
};
