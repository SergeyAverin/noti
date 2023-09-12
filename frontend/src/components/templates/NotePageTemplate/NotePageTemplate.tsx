import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "styled-components";
import { v4 as uuidv4 } from 'uuid';

import { RootState } from "@redux/store";
import { INote } from "@redux/types/note";
import { useSaveNoteMutation, useLoadNoteMutation } from "@redux/api/noteApi";
import { ICell } from "@redux/types/cell";
import { Margin, Tooltip, Button } from "@atoms/index";
import { Title } from "@molecules/Title";
import { TrashAlert } from "@organisms/TrashAlert";
import { NoteStyled } from "./NotePageTemplateStyled";
import { EditInput } from "@atoms/EditInput/EditInput";
import { Notification } from "@molecules/Notification/Notification";
import { NotificationList } from "@organisms/NotificationList";
import { Cell } from "@organisms/Cell";
import { addCell, selectNext, selectPrev } from "@redux/features/noteSlice";

interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  const dispatch = useDispatch()
  const cells = useSelector((state: RootState) => state.noteState.content);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault()
        dispatch(addCell())
        dispatch(selectNext())
      } else if (event.key === "ArrowDown") {
        dispatch(selectNext())
      } else if (event.key === "ArrowUp") {
        dispatch(selectPrev())
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cells]);

  return (
    <div>
      <NoteStyled>
        <Margin mt={50} mb={80}>
          <Title title={note.title} slug={note.slug} />
        </Margin>
        {cells.map((cell) => (
          <Cell cell={cell} key={cell.id} />
        ))}
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
      <NotificationList />
    </div>
  );
};
