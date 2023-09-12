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

interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  const cells = useSelector((state: RootState) => state.noteState.content);
  const id = uuidv4();
  console.log(id)
  return (
    <div>
      <NoteStyled>
        <Margin mt={50} mb={80}>
          <Title title={note.title} slug={note.slug} />
        </Margin>
        {cells.map((cell) => (
          <Cell cell={cell} />
        ))}
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
      <NotificationList />
    </div>
  );
};
