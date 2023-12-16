import React, { ReactNode } from "react";

import { CellToolsStyled } from "./CellToolsStyled";


interface ICellToolsProps {
  setIsDraggingStarted: Function;
  addCellContextMenu: React.ReactNode;
  cellPropertyContextMenu: ReactNode;
}

export const CellTools: React.FC<ICellToolsProps> = ({
  setIsDraggingStarted,
  addCellContextMenu,
  cellPropertyContextMenu,
}) => {
  return (
    <CellToolsStyled contentEditable={false} data-name='tools'>
      {addCellContextMenu}
      <div
        onMouseDown={() => setIsDraggingStarted(true)}
        onMouseLeave={() => setIsDraggingStarted(false)}
      >
        {cellPropertyContextMenu}
      </div>
    </CellToolsStyled>
  );
};
