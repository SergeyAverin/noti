import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NoteStyled } from "./NoteStyled";
import { INote } from "@redux/types/note";
import { useSaveNoteMutation, useLoadNoteMutation } from "@redux/api/noteApi";
import { RootState } from "@redux/store";
import { Margin } from "@atoms/index";
import { Title } from "@molecules/Title";
import { Cell } from "@molecules/Cell";
import { pushCell, selectCell, setNote } from "@redux/features/noteSlice";
import { ICell } from "@redux/types/cell";

interface INoteProps {
  note: INote;
}

export const Note: React.FC<INoteProps> = ({ note }) => {
  const cells = useSelector((state: RootState) => state.noteState.content);
  const [saveNote] = useSaveNoteMutation()
  const dispatch = useDispatch();
  const [loadNote] = useLoadNoteMutation()

  useEffect(() => {
    loadNote(note.slug).then(data => {
      data = data as { data: ICell[] }
      dispatch(setNote(data.data))
    })
  }, [note.slug])

  const selectedCell = useSelector(
    (state: RootState) => state.noteState.selectedCell
  );

  useEffect(()=>{
    saveNote({slug: note.slug, content: cells})
  }, [cells])
  
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        dispatch(pushCell());
        dispatch(selectCell(cells.length+1));
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
      <Margin mb={80}>
        <Title title={note.title} slug={note.slug} />
      </Margin>
      {
      cells.map((cell) => (
        <Margin mt={20}>
          <Cell cell={cell} />
        </Margin>
      ))
      }
    </NoteStyled>
  );
};
