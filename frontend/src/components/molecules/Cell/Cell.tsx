import React from "react";
import { useDispatch } from "react-redux";

import { CellStyled, CellToolsStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { CellString } from "./CellString";
import { CellCheckbox } from "./CellCheckbox";
import { selectCell } from "@redux/features/noteSlice";

interface ICellComponentProps {
  cell: ICell;
}

export const Cell: React.FC<ICellComponentProps> = ({ cell }) => {
  const dispatch = useDispatch();
  const onClickHeandler = () => {
    dispatch(selectCell(cell.id));
  };
  return (
    <CellStyled onClick={onClickHeandler}>
      <CellToolsStyled>
        <div>+</div>
        <div>-</div>
      </CellToolsStyled>
      <div>
        {cell.type == "string" && <CellString cell={cell} />}
        {cell.type == "chekbox" && <CellCheckbox text={"sd"} />}
      </div>
    </CellStyled>
  );
};
