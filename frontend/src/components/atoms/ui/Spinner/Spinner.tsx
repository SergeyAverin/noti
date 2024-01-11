import React from "react";

import { SpinnerStyled } from "./SpinnerStyled";


/** This component show on load */
export const Spinner = () => {
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
