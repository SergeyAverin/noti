import React from "react";

import { ICell } from "@redux/types/cell";
import { CellString } from "./CellString";

interface ICellSelectionProps {
  cell: ICell;
  onClick: React.MouseEventHandler
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell, onClick }) => {
  return <div onClick={onClick}>{cell.type == "string" && <CellString cell={cell} />}</div>;
};
