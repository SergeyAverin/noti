import React from "react";

import { SpinnerStyled } from "./SpinnerStyled";


/** This component show on load */
export const Spinner: React.FC = () => {
  return (
    <div data-testid="spinner">
      <SpinnerStyled>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerStyled>
    </div>
  );
};
