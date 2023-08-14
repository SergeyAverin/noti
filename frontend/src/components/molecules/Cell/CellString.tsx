import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CellStringStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { changeCell } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";

interface ICellStringProps {
  cell: ICell;
}

export const CellString: React.FC<ICellStringProps> = ({ cell }) => {
const inputValue = useSelector((state: RootState) => state.noteState.content.find(item => item.id == cell.id));
  const dispatch = useDispatch();

  const changeHeandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeCell({ id: cell.id, value: newValue }))
  }

  return <CellStringStyled value={inputValue?.children as string} onChange={changeHeandler} />;
};
