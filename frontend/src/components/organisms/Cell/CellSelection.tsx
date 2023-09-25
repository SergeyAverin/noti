import React from "react";

import { ICell, CellTypeEnum} from "@redux/types/cell";
import { HeadingLarge, HeadingMedium, HeadingSmall, Checkbox, Line, Quote } from "./CellStyled";
import { CellString } from "./CellString";

interface ICellSelectionProps {
  cell: ICell;
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell }) => {
  return (
    <>
      {cell.type == CellTypeEnum.STRING && <CellString data-cell-type={cell.type} cell={cell} />}
      {cell.type == CellTypeEnum.HEADING_LARGE && <HeadingLarge data-cell-type={cell.type} >{ cell.children }</HeadingLarge>}
      {cell.type == CellTypeEnum.HEADING_MEDIUM && <HeadingMedium data-cell-type={cell.type} >{ cell.children }</HeadingMedium>}
      {cell.type == CellTypeEnum.HEADING_SMALL && <HeadingSmall data-cell-type={cell.type} >{ cell.children }</HeadingSmall>}
      {cell.type == CellTypeEnum.CHECKBOX && <Checkbox data-cell-type={cell.type} value={cell.children } />}
      {cell.type == CellTypeEnum.LINE && <Line data-cell-type={cell.type} />}
      {cell.type == CellTypeEnum.QUOTE && <Quote data-cell-type={cell.type}>{ cell.children }</Quote>}
    </>
    );
};
