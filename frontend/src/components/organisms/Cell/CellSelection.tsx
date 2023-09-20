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
      {cell.type == "div" && <div data-cell-type={cell.type} >{ cell.children }</div>}
    </>
    );
};
