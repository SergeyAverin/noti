import React from "react";

import { Spinner, Center } from "@atoms/index";
import Title from "@molecules/editor/Title";
import Header from "@organisms/collection/Header";
import SideBar from "@organisms/collection/SideBar";
import ToolsBar from "@organisms/editor/ToolsBar";
import Editor from "@organisms/editor/Editor";
import TrashAlert from "@organisms/collection/TrashAlert";
import { NotificationList } from "@organisms/account/NotificationList";
import NotePageTemplate from "@templates/NotePageTemplate";
import { INote } from "@redux/types/note";

interface INotesPagePresentationalProps {
  note: INote | undefined;
  isLoading: boolean;
}

export const NotesPagePresentational: React.FC<
  INotesPagePresentationalProps
> = ({ note, isLoading }) => {
  return (
    <>
      {!isLoading && note ? (
        <>
          <NotePageTemplate
            note={note}
            header={<Header note={note} />}
            sideBar={<SideBar />}
            title={<Title slug={note.slug} title={note.title} />}
            toolsBar={<ToolsBar />}
            editor={<Editor />}
            notification={<NotificationList />}
            trashAlert={<TrashAlert note={note} />}
          />
        </>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </>
  );
};
