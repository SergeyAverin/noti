import React, { useEffect, useState } from "react";

import { CellPropertyColor, ICell } from "@redux/types/cell";
import { useCellInput } from "@hooks/useCellInput";
import {CellStringStyled } from './CellStyled'

interface ICellString {
  cell: ICell;
}

export const CellString: React.FC<ICellString> = ({ cell }) => {
  const [value, setValue] = useCellInput(cell.children, cell.id);
  const [content, setContent] = useState("");

  const handleChange = (evt: React.FormEvent<HTMLDivElement>): void => {
    console.log(content);
    setContent(evt.currentTarget.innerHTML);
  };
  return (
    <CellStringStyled
      color={cell.property.color} styleMode={cell.property.styleMode}
      onInput={handleChange}
      contentEditable={true}
      suppressContentEditableWarning={true}
      placeholder="placeholder"
    >
      {value}
    </CellStringStyled>
  );
};
