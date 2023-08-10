import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { ToggleButton } from "@atoms/ToggleButton/ToggleButton";
import {
  useAddTrashMutation,
  useRemoveTrashMutation,
} from "@redux/api/libraryApi";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { INote } from "@redux/types/note";

import TrashIcon from "@public/TrashIcon.svg";

interface IAddTrashProps {
  note: INote
}

export const AddTrash: React.FC<IAddTrashProps> = ({ note }) => {
  const theme = useContext(ThemeContext);
  const [addTrash] = useAddTrashMutation();
  const [removeTrash] = useRemoveTrashMutation();

  const onDisable = async (isEnable: boolean) => {
    await removeTrash(note.slug);
  };
  const onEnable = async (isDisable: boolean) => {
    await addTrash(note.slug);
  };

  return (
      <ToggleButton
        iconDisable={<TrashIcon stroke={theme?.color.fg} />}
        iconEnable={
          <TrashIcon
            fill={theme?.color.highlight}
            stroke={theme?.color.highlight}
          />
        }
        isEnable={note.isTrash}
        onDisable={onDisable}
        onEnable={onEnable}
      />
  );
};
