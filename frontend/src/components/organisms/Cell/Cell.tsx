import React from "react";

import { CellSelection } from "./CellSelection";
import { CellStyled, CellTools, CellWrapper } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { AddCellContextMenu } from "@molecules/AddCellContextMenu";
import { CellPropertyContextMenu } from "@molecules/CellPropertyContextMenu";
import { useCreateCell } from "@hooks/useCreateCell";

interface ICellProps {
  cell: ICell;
}

export const Cell: React.FC<ICellProps> = ({ cell }) => {
  const parentDivRef = useCreateCell(cell)
  
  return (
      <CellWrapper>
        <CellStyled ref={parentDivRef}>
            <CellSelection cell={cell} />
          </CellStyled>
          <CellTools>
              <AddCellContextMenu cell={cell} />
              <CellPropertyContextMenu cell={cell} />
          </CellTools>
      </CellWrapper>
  );
};
