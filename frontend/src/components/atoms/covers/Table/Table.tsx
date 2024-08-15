import React from "react";

import { TableStyled } from "./TableStyled";


/** This component table in wrapped content */
export const Table : React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div data-testid="table">
    <TableStyled>
      { children }
    </TableStyled>
    </div>
  )
}
