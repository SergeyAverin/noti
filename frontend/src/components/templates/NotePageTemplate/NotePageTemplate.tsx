import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from 'styled-components';

import { RootState } from "@redux/store";
import { INote } from "@redux/types/note";
import { useSaveNoteMutation, useLoadNoteMutation } from "@redux/api/noteApi";
import { pushCell, selectCell, setNote } from "@redux/features/noteSlice";
import { ICell } from "@redux/types/cell";
import { Margin } from "@atoms/index";
import { Title } from "@molecules/Title";
import { Cell } from "@molecules/Cell";
import { TrashAlert } from "@organisms/TrashAlert";
import { NoteStyled } from "./NotePageTemplateStyled";


interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({ note }) => {
  const theme = useContext(ThemeContext);
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
    <div>
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
      { note.isTrash &&
      <TrashAlert note={note} />
       }
    </div>
  );
};
