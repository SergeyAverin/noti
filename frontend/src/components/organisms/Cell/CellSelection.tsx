import React, { useEffect, useState } from "react";

import { ICell, CellTypeEnum } from "@redux/types/cell";
import {
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Checkbox,
  Line,
  Quote,
} from "./CellStyled";
import { CellString } from "./CellString";
import { useCellInput } from "@hooks/useCellInput";

interface ICellSelectionProps {
  cell: ICell;
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell }) => {
  const [value, setValue] = useCellInput(cell.children, cell.id);

  return (
    <>
      {cell.type == CellTypeEnum.STRING && (
        <CellString data-cell-type={cell.type} cell={cell} />
      )}
      {cell.type == CellTypeEnum.HEADING_LARGE && (
        <HeadingLarge
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
        >
          {value}
        </HeadingLarge>
      )}
      {cell.type == CellTypeEnum.HEADING_MEDIUM && (
        <HeadingMedium
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
        >
          {value}
        </HeadingMedium>
      )}
      {cell.type == CellTypeEnum.HEADING_SMALL && (
        <HeadingSmall
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
        >
          {value}
        </HeadingSmall>
      )}
      {cell.type == CellTypeEnum.CHECKBOX && (
        <Checkbox
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          value={cell.children}
        />
      )}
      {cell.type == CellTypeEnum.LINE && (
        <Line
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
        />
      )}
      {cell.type == CellTypeEnum.QUOTE && (
        <Quote
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
        >
          {value}
        </Quote>
      )}
    </>
  );
};
