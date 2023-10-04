import React, { useState }  from "react";

import { useDrag } from 'react-dnd';

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
  const parentDivRef = useCreateCell(cell);
  const [isDraggingStarted, setIsDraggingStarted]= useState(false)
const [{ isDragging }, drag] = useDrag({
        type: "cell",
        item: {cell},
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      })

  return (
    <CellWrapper
    ref={isDraggingStarted?drag:null}
    >
      <CellStyled ref={parentDivRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <CellSelection cell={cell} />
      </CellStyled>
      <CellTools>
        <AddCellContextMenu cell={cell} />
        <div onMouseDown={() => setIsDraggingStarted(true)} onMouseLeave={()=>setIsDraggingStarted(false)}>
          <CellPropertyContextMenu cell={cell} />
        </div>
      </CellTools>
    </CellWrapper>
  );
};
