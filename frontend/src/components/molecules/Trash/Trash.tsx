import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { ToggleMenu, Margin, Width, NoteLink, LinkBG } from "@atoms/index";
import { useGetTrashQuery } from "@redux/api/libraryApi";

import TrashIcon from "@public/TrashIcon.svg";

export const Trash: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { data, isLoading, isError } = useGetTrashQuery();

  return (
    <ToggleMenu text="Trash" icon={<TrashIcon stroke={theme?.color.fg} />}>
      <Margin ml={30}>
        {!isLoading &&
          data &&
          data.map((note) => (
            <NoteLink key={note.slug} href={`/notes/${note.slug}`}>
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && data?.length == 0 && <div>Trash is empty</div>}
      </Margin>
      <Margin ml={10} mt={25} >
          <LinkBG href="/notes/trash" text="Trash table" />
      </Margin>
    </ToggleMenu>
  );
};
