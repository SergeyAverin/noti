import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CellStyled, CellToolsStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { CellString } from "./CellString";
import { CellCheckbox } from "./CellCheckbox";
import { selectCell } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";

interface ICellComponentProps {
  cell: ICell;
}

export const Cell: React.FC<ICellComponentProps> = ({ cell }) => {
  const dispatch = useDispatch();
  const selectedCell = useSelector(
    (state: RootState) => state.noteState.selectedCell
  );
  const onClickHeandler = () => {
    dispatch(selectCell(cell.id));
  };

  return (
    <CellStyled onClick={onClickHeandler} isSelected={selectedCell?.id == cell.id}>
      <CellToolsStyled>
        <div>+</div>
        <div>-</div>
      </CellToolsStyled>
      <div>
        {cell.type == "string" && <CellString cell={cell} />}
        {cell.type == "checkbox" && <CellCheckbox cell={cell} />}
      </div>
    </CellStyled>
  );
};
