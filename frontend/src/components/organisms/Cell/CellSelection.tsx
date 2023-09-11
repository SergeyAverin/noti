import React from "react";

import { ICell } from "@redux/types/cell";
import { CellString } from "./CellString";

interface ICellSelectionProps {
  cell: ICell;
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell }) => {
  return <>{cell.type == "string" && <CellString cell={cell} />}</>;
};
