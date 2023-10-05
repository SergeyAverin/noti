import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { useGetTrashQuery } from "@redux/api/libraryApi";
import { DropDownMenu, Margin, Width, NoteLink, LinkBG } from "@atoms/index";

import TrashIcon from "@public/TrashIcon.svg";

export const TrashDropDown: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { data, isLoading, isError } = useGetTrashQuery();

  return (
    <DropDownMenu text="Trash" icon={<TrashIcon stroke={theme?.color.fg} />}>
      <Margin ml={10} mb={25} >
          <LinkBG href="/notes/trash" text="Trash table" />
      </Margin>
      <Margin ml={30}>
        {!isLoading &&
          data &&
          data.map((note) => (
            <NoteLink haveBackground={true} key={note.slug} href={`/notes/${note.slug}`}>
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && data?.length == 0 && <div>Trash is empty</div>}
      </Margin>
    </DropDownMenu>
  );
};
