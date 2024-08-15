import React, { ReactNode } from "react";
import { useTheme } from "styled-components";

import { NotePageTemplatePresentational } from "./NotePageTemplatePresentational";
import { useLoadNote } from "./hooks/useLoadNote";
import { useSaveNote } from "./hooks/useSaveNote";
import { INote } from "@redux/types/note";

interface INotePageTemplatePresentationalProps {
  note: INote;

  header: ReactNode;
  sideBar: ReactNode;
  toolsBar: ReactNode;
  title: ReactNode;
  editor: ReactNode;
  notification: ReactNode;
  trashAlert: ReactNode;
}

/** This component is template of page in which page components are inserted  */
export const NotePageTemplateContainer: React.FC<
  INotePageTemplatePresentationalProps
> = ({
  note,
  editor,
  header,
  sideBar,
  toolsBar,
  title,
  trashAlert,
  notification,
}) => {
  useLoadNote(note.slug);
  useSaveNote();
  const theme = useTheme();

  return (
    <NotePageTemplatePresentational
      isTrash={note.isTrash}
      theme={theme}
      header={header}
      sideBar={sideBar}
      title={title}
      toolsBar={toolsBar}
      editor={editor}
      notification={notification}
      trashAlert={trashAlert}
    />
  );
};
