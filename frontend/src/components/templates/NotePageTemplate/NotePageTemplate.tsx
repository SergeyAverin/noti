import React from "react";

import { NoteStyled } from "./NotePageTemplateStyled";
import { Margin, Position, Spinner, Width } from "@atoms/index";
import { Title } from "@molecules/Title";
import { DebugAlert } from "@molecules/DebugAlert";
import { TrashAlert } from "@organisms/TrashAlert";
import { NotificationList } from "@organisms/NotificationList";
import { INote } from "@redux/types/note";
import { Editor } from "@organisms/Editor/Editor";
import { useLoadNote } from "@hooks/useLoadNote";
import { useSaveNote } from "@hooks/useSaveNote";

interface INotePageTemplateProps {
  note: INote;
}


export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {

  useLoadNote(note.slug);
  useSaveNote();

  return (
    <>
      <NoteStyled>
        <Width width="50%" isMarginAuto={true}>
          <Position position="relative">
            <Margin  mb={30}>
              <Title title={note.title} slug={note.slug} />
            </Margin>
            <Editor />
          </Position>
        </Width>    
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
      <NotificationList />
      <DebugAlert />
    </>
  );
};
