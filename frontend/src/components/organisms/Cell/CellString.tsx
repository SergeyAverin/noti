import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CellStringStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { changeCell, setCursorPosition } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";

interface ICellStringProps {
  cell: ICell;
}

export const CellString: React.FC<ICellStringProps> = ({ cell }) => {
  const inputValue = useSelector((state: RootState) =>
    state.noteState.content.find((item) => item.id == cell.id)
  );
  const cursorPosition = useSelector(
    (state: RootState) => state.noteState.cursorPosition
  );

  const dispatch = useDispatch();
  const selectedCell = useSelector(
    (state: RootState) => state.noteState.selectedCell
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedCell?.id == cell.id && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
    }
  }, [selectedCell]);
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

  return (
    <CellStringStyled
      ref={inputRef}
      value={inputValue?.children as string}
      onChange={changeHeandler}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      {...cell.property}
    />
  );
};
