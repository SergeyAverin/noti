import React, { useEffect, useRef } from "react";

import { CellCheckboxStyled,  CellCheckboxWrapperStyled, CellStringStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { changeCell, setCursorPosition } from "@redux/features/noteSlice";

interface ICellCheckboxProps {
  cell: ICell;
}

export const CellCheckbox: React.FC<ICellCheckboxProps> = ({ cell }) => {
  const cellState = useSelector((state: RootState) =>
  state.noteState.content.find((item) => item.id == cell.id)
);
const selectedCell = useSelector(
  (state: RootState) => state.noteState.selectedCell
);
const cursorPosition = useSelector(
  (state: RootState) => state.noteState.cursorPosition
);
const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedCell?.id == cell.id && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [selectedCell]);
  const dispatch = useDispatch();

  const changeHeandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeCell({ id: cell.id, value: newValue }));
  };
  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setCursorPosition(event.target.selectionStart));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      dispatch(setCursorPosition(inputRef.current.selectionStart));
    }
  };
  return <CellCheckboxWrapperStyled>
        <CellCheckboxStyled  { ...cell.property } />
        <CellStringStyled
          onChange={changeHeandler}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
        >
          {cell.children as string}
        </CellStringStyled>
    </CellCheckboxWrapperStyled>;
};
