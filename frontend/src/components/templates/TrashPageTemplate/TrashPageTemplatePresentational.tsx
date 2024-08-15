import React from "react";

import { TrashWrapperStyled } from "./TrashPageTemplateStyled";
import { Margin, Width } from "@atoms/index";
import CleanTrash from "@molecules/collection/CleanTrash";
import TrashTable from "@organisms/collection/TrashTable";
import { INote } from "@redux/types/note";
import SideBar from "@organisms/collection/SideBar";

interface ITrashPageTemplatePresentationalProps {
  notes: INote[];
}

export const TrashPageTemplatePresentational: React.FC<
  ITrashPageTemplatePresentationalProps
> = ({ notes }) => {
  return (
    <>
      <SideBar />
      <TrashWrapperStyled>
        <h1>Trash</h1>
        {notes.length != 0 && <CleanTrash />}
        <Margin mt={30}>
          <Width width="80%">
            <TrashTable notes={notes} />
          </Width>
        </Margin>
        {notes.length == 0 && <h2>Trash is empty</h2>}
      </TrashWrapperStyled>
    </>
  );
};
