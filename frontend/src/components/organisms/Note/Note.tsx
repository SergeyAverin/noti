import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NoteStyled } from "./NoteStyled";
import { INote } from "@redux/types/note";
import { RootState } from "@redux/store";
import { Margin } from "@atoms/index";
import { Title } from "@molecules/Title";
import { Cell } from "@molecules/Cell";
import { pushCell, selectCell } from "@redux/features/noteSlice";

interface INoteProps {
  note: INote;
}

export const Note: React.FC<INoteProps> = ({ note }) => {
  const cells = useSelector((state: RootState) => state.noteState.content);
  const d = useSelector((state: RootState) => state.noteState.content);
  const selectedCell = useSelector(
    (state: RootState) => state.noteState.selectedCell
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(d)
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        dispatch(pushCell());
      }
      if (event.key === "ArrowUp") {
        if (selectedCell && selectedCell.id - 1 >= 1) {
          dispatch(selectCell(selectedCell.id - 1));
        }
      }
      if (event.key === "ArrowDown") {
        if (selectedCell && selectedCell.id + 1 <= cells.length) {
          dispatch(selectCell(selectedCell.id + 1));
        } else if (selectedCell && selectedCell.id == cells.length) {
          dispatch(pushCell());
          dispatch(selectCell(selectedCell.id + 1));
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell, cells]);

  return (
    <NoteStyled>
      <Title title={note.title} />
      {cells.map((cell) => (
        <Margin mt={20}>
          <Cell cell={cell} />
        </Margin>
      ))}
    </NoteStyled>
  );
};
