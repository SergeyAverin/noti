import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "styled-components";

import { RootState } from "@redux/store";
import { INote } from "@redux/types/note";
import { useSaveNoteMutation, useLoadNoteMutation } from "@redux/api/noteApi";
import { ICell } from "@redux/types/cell";
import { Margin, Tooltip } from "@atoms/index";
import { Title } from "@molecules/Title";
import { TrashAlert } from "@organisms/TrashAlert";
import { NoteStyled } from "./NotePageTemplateStyled";
import { EditInput } from '@atoms/EditInput/EditInput'


interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  return (
    <div>
      <NoteStyled>
        <Margin mt={50} mb={80}>
          <Title title={note.title} slug={note.slug} />
        </Margin>
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
    </div>
  );
};
