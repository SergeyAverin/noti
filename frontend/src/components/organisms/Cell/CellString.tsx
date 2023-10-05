import React, { useEffect, useState } from "react";

import { CellPropertyColor, ICell } from "@redux/types/cell";
import { useCellInput } from "@hooks/useCellInput";
import {CellStringStyled } from './CellStyled'

interface ICellString {
  cell: ICell;
}

export const CellString: React.FC<ICellString> = ({ cell }) => {
  const [value, setValue] = useCellInput(cell.children, cell.id);

  return (
    <CellStringStyled
      color={cell.property.color} styleMode={cell.property.styleMode}
      onBlur={setValue}
      contentEditable={true}
      suppressContentEditableWarning={true}
      placeholder="placeholder"
    >
      {value}
    </CellStringStyled>
  );
};
