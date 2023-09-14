import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { ICell } from "@redux/types/cell";
import { changeCellChildren, setSelectRange } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";

interface ICellString {
  cell: ICell;
}

const CellStringStyled = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  outline: none;
`;

export const CellString: React.FC<ICellString> = ({ cell }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(cell.children)
  useEffect(()=>{
    setValue(cell.children)
  }, [cell])
  const selectRangeStart = useSelector((state: RootState) => state.noteState.selectRangeStart)
  const cellRef = useRef<HTMLInputElement>(null);
  const setCursor = () => {
    const selection = window.getSelection();
    if (selection) {
      const range = selection.getRangeAt(0);
      const startOffset = range.startOffset;
      const endOffset = range.endOffset;
      dispatch(setSelectRange({rangeStart: startOffset, rangeEnd: endOffset}));
    }
  };
  const onInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
    dispatch(changeCellChildren(event.currentTarget.innerText));
    setCursor();
  };
  const onFocus = () => {
    // 
  };
  const selectedCell = useSelector(
    (state: RootState) => state.noteState.selectedCell
  );

  useEffect(() => {
    if (selectedCell && cell.id == selectedCell.id) {
      cellRef.current?.focus();
    }
  });
  return (
    <CellStringStyled
      contentEditable={true}
      onInput={onInput}
      onFocus={onFocus}
      ref={cellRef}
    >
      {value}
    </CellStringStyled>
  );
};
