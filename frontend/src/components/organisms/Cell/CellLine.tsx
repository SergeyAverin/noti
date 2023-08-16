import React, { useEffect, useRef } from "react";

import { CellLineStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";

interface ICellLineProps {
  cell: ICell;
}

export const CellLine: React.FC<ICellLineProps> = ({ cell }) => {
  return (
    <>
    <CellLineStyled
      {...cell.property}
      />
    </>
  );
};
