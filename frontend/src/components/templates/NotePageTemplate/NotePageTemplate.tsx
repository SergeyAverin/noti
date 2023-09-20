import React  from "react";
import { useSelector } from "react-redux";

import { NoteContentStyled, NoteStyled } from "./NotePageTemplateStyled";
import { Margin, Width } from "@atoms/index";
import { Title } from "@molecules/Title";
import { DebugAlert } from "@molecules/DebugAlert";
import { TrashAlert } from "@organisms/TrashAlert";
import { NotificationList } from "@organisms/NotificationList";
import { Cell } from "@organisms/Cell";
import { INote } from "@redux/types/note";
import { cellsSelector } from "@redux/selectors/note";

interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  const cells = useSelector(cellsSelector);

  return (
    <div>
      <NoteStyled>
        <Width width="50%" isMarginAuto={true}>
          <Margin mt={50} mb={30}>
            <Title title={note.title} slug={note.slug} />
          </Margin>
          <NoteContentStyled contentEditable={true}>
            {cells.map((cell) => (
              <Cell cell={cell} key={cell.id} />
            ))}
          </NoteContentStyled>
        </Width>
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
      <NotificationList />
      <DebugAlert />
    </div>
  );
};
