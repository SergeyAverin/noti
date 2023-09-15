import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "@redux/store";
import { INote } from "@redux/types/note";
import { useSaveNoteMutation, useLoadNoteMutation } from "@redux/api/noteApi";
import { ICell } from "@redux/types/cell";
import { Margin, Tooltip, Button, Width, Center } from "@atoms/index";
import { Title } from "@molecules/Title";
import { TrashAlert } from "@organisms/TrashAlert";
import { NoteStyled } from "./NotePageTemplateStyled";
import { EditInput } from "@atoms/EditInput/EditInput";
import { Notification } from "@molecules/Notification/Notification";
import { NotificationList } from "@organisms/NotificationList";
import { Cell } from "@organisms/Cell";
import {
  addCell,
  selectCell,
  selectNext,
  selectPrev,
  setSelectRange,
} from "@redux/features/noteSlice";

interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  const dispatch = useDispatch();
  const cells = useSelector((state: RootState) => state.noteState.content);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();
        dispatch(addCell());
        dispatch(selectNext());
      } else if (event.key === "ArrowDown") {
        dispatch(selectNext());
      } else if (event.key === "ArrowUp") {
        dispatch(selectPrev());
      }
      try {
        const selection = window.getSelection();
        if (selection) {
          const range = selection.getRangeAt(0);
          const startOffset = range.startOffset;
          const endOffset = range.endOffset;
          dispatch(
            setSelectRange({ rangeStart: startOffset, rangeEnd: endOffset })
          );
          dispatch(selectCell(cells[0]));
        }
      } catch (error) {
        if (error instanceof DOMException) {
          dispatch(setSelectRange({ rangeStart: 0, rangeEnd: 0 }));
        }
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
        <Width width="50%" isMarginAuto={true}>
          <Margin mt={50} mb={30}>
            <Title title={note.title} slug={note.slug} />
          </Margin>
          {cells.map((cell) => (
            <Cell cell={cell} key={cell.id} />
          ))}
        </Width>
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
      <NotificationList />
    </div>
  );
};
