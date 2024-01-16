import React from "react";

import { HeaderStyled } from "./HeaderStyled";
import { Flex, Margin } from "@atoms/index";
import AddTrash from "@molecules/collection/AddTrash";
import AddBookmark from "@molecules/collection/AddBookmark";
import DateCreated from "@molecules/collection/DateCreated";
import ShareButton from "@molecules/collection/ShareButton";
import { INote } from "@redux/types/note";

interface IHeaderPresentationalProps {
  note: INote;
}

export const HeaderPresentational: React.FC<IHeaderPresentationalProps> = ({
  note,
}) => {
  return (
    <HeaderStyled>
      <div></div>
      <Flex justifyContent="flex-end" alignItems="center">
        <Margin mr={30}>
          <DateCreated
            dataCreated={new Date(note.metadata.dataCreated)}
            dataEdited={new Date(note.metadata.dataUpdate)}
          />
        </Margin>
        <ShareButton />
        <AddTrash note={note} />
        <AddBookmark note={note} />
      </Flex>
    </HeaderStyled>
  );
};
