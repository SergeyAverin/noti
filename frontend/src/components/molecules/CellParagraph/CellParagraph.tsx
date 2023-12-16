import React from "react";

import { CellParagraphStyled } from "./CellParagraphStyled";
import { ICell } from "@redux/types/cell";

interface ICellParagraph {
  cell: ICell;
}

export const CellParagraph: React.FC<ICellParagraph> = ({ cell }) => {
  return (
    <CellParagraphStyled data-name="paragroph" data-cell-id={cell.id}>
      {cell.children}
    </CellParagraphStyled>
  );
};
