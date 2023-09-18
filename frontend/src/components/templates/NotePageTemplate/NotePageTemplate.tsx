import React from "react";
import { useSelector } from "react-redux";

import { NoteStyled } from "./NotePageTemplateStyled";
import { Margin, Width } from "@atoms/index";
import { Title } from "@molecules/Title";
import { TrashAlert } from "@organisms/TrashAlert";
import { NotificationList } from "@organisms/NotificationList";
import { Cell } from "@organisms/Cell";
import { INote } from "@redux/types/note";
import { RootState } from "@redux/store";
import { useCellNavigation } from "@hooks/useCellNavigation";


interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  const cells = useSelector((state: RootState) => state.noteState.content);

  useCellNavigation(cells)

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
