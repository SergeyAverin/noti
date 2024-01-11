import React from "react";

import { useCleanTrashMutation } from "@redux/api/libraryApi";
import { INote } from "@redux/types/note";
import { Button, Margin, Wrapper } from "@atoms/index";
import { CleanTrash } from "@molecules/collection/CleanTrash";
import { TrashTable } from "@organisms/collection/TrashTable/TrashTable";

interface ITrashPageTemplateProps {
  notes: INote[];
}

export const TrashPageTemplate: React.FC<ITrashPageTemplateProps> = ({
  notes,
}) => {
  return (
    <Wrapper>
      <h1>Trash</h1>
      {notes.length != 0 && <CleanTrash  danger={true} fill={true} />}
      <Margin mt={30}>
        <TrashTable notes={notes} />
        {notes.length == 0 && <h2>Trash is empty</h2>}
      </Margin>
    </Wrapper>
  );
};
