import React from "react";

import { TableStyled } from "./TableStyled";


/** This component table in wrapped content */
export const Table : React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <TableStyled>
      { children }
    </TableStyled>
  )
}
