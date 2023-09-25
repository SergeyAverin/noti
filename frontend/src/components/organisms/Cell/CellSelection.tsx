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
      {cell.type == CellTypeEnum.HEADING_LARGE && <HeadingLarge color={cell.property.color} styleMode={cell.property.styleMode}data-cell-type={cell.type} >{ cell.children }</HeadingLarge>}
      {cell.type == CellTypeEnum.HEADING_MEDIUM && <HeadingMedium color={cell.property.color} styleMode={cell.property.styleMode} data-cell-type={cell.type} >{ cell.children }</HeadingMedium>}
      {cell.type == CellTypeEnum.HEADING_SMALL && <HeadingSmall color={cell.property.color} styleMode={cell.property.styleMode} data-cell-type={cell.type} >{ cell.children }</HeadingSmall>}
      {cell.type == CellTypeEnum.CHECKBOX && <Checkbox color={cell.property.color} styleMode={cell.property.styleMode} data-cell-type={cell.type} value={cell.children } />}
      {cell.type == CellTypeEnum.LINE && <Line color={cell.property.color} styleMode={cell.property.styleMode} data-cell-type={cell.type} />}
      {cell.type == CellTypeEnum.QUOTE && <Quote color={cell.property.color} styleMode={cell.property.styleMode} data-cell-type={cell.type}>{ cell.children }</Quote>}
    </>
    );
  };
  