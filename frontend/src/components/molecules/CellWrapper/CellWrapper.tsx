import React from "react";

import { CellWrapperStyled } from "./CellWrapperStyled";
import { CellToolsStyled } from "@molecules/CellTools/CellToolsStyled";


interface ICellWrapperProps {
  cellComponent: React.ReactNode,
  cellToolsComponent: React.ReactNode
}

export const CellWrapper: React.FC<ICellWrapperProps> = ({cellComponent, cellToolsComponent}) => {
  return (
    <CellWrapperStyled cellToolsStyled={CellToolsStyled} data-name='cell wrapper'>
      {cellComponent}
      {cellToolsComponent}
    </CellWrapperStyled>
    );
};
