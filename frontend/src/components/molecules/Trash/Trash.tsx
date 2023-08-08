import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { ToggleMenu, Margin, NoteLink } from "@atoms/index";
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
            <NoteLink key={note.slug} href={`/note/${note.slug}`}>
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && data?.length == 0 && <div>Trash is empty</div>}
      </Margin>
    </ToggleMenu>
  );
};
