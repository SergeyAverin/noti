import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { ICell } from "@redux/types/cell";
import { changeCellChildren } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";

interface ICellString {
  cell: ICell;
}

const CellStringStyled = styled.p`
  font-size: 24px;
  outline: none;
`;

export const CellString: React.FC<ICellString> = ({ cell }) => {
  const dispatch = useDispatch()
  const onInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
    dispatch(changeCellChildren(event.currentTarget.innerText))
  }
  const cellRef = useRef<HTMLInputElement>(null);
  const selectedCell = useSelector((state: RootState) => state.noteState.selectedCell);

  useEffect(()=>{
    if (selectedCell && cell.id == selectedCell.id) {
      cellRef.current?.focus()
    }
  })
  return (
    <CellStringStyled contentEditable={true} onInput={onInput} ref={cellRef}>{cell.children}</CellStringStyled>
  );
};
