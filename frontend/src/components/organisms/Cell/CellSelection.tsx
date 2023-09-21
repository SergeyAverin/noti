import React from "react";

import { ICell } from "@redux/types/cell";
import { CellString } from "./CellString";

interface ICellSelectionProps {
  cell: ICell;
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell }) => {
  return (
    <>
      {cell.type == "string" && <CellString data-cell-type={cell.type} cell={cell} />}
      {cell.type == "h1" && <h1 data-cell-type={cell.type} >{ cell.children }</h1>}
      {cell.type == "h2" && <h2 data-cell-type={cell.type} >{ cell.children }</h2>}
      {cell.type == "h3" && <h3 data-cell-type={cell.type} >{ cell.children }</h3>}
      {cell.type == "line" && <hr data-cell-type={cell.type} />}
    </>
    );
};
