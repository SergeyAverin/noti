import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { ICell } from "@redux/types/cell";
import { changeCellChildren } from "@redux/features/noteSlice";

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
  return (
    <CellStringStyled contentEditable={true} onInput={onInput}>{cell.children}</CellStringStyled>
  );
};
