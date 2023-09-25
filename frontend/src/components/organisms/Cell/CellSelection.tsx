import React from "react";

import { ICell, CellTypeEnum} from "@redux/types/cell";
import { CellString } from "./CellString";

interface ICellSelectionProps {
  cell: ICell;
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell }) => {
  return (
    <>
      {cell.type == CellTypeEnum.STRING && <CellString data-cell-type={cell.type} cell={cell} />}
      {cell.type == CellTypeEnum.HEADING_1 && <h1 data-cell-type={cell.type} >{ cell.children }</h1>}
      {cell.type == CellTypeEnum.HEADING_2 && <h2 data-cell-type={cell.type} >{ cell.children }</h2>}
      {cell.type == CellTypeEnum.HEADING_3 && <h3 data-cell-type={cell.type} >{ cell.children }</h3>}
      {cell.type == CellTypeEnum.CHECKBOX && <input data-cell-type={cell.type} type="checkbox" />}
      {cell.type == CellTypeEnum.LINE && <hr data-cell-type={cell.type} />}
      {cell.type == CellTypeEnum.QUOTE && <blockquote data-cell-type={cell.type}>{ cell.children }</blockquote>}
    </>
    );
};
