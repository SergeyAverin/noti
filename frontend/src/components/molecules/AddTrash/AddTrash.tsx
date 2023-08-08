import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useParams } from "react-router-dom";

import { ToggleButton } from "@atoms/ToggleButton/ToggleButton";
import {
  useAddTrashMutation,
  useRemoveTrashMutation,
} from "@redux/api/libraryApi";

import TrashIcon from "@public/TrashIcon.svg";

export const AddTrash: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [addTrash] = useAddTrashMutation();
  const [removeTrash] = useRemoveTrashMutation();
  const slug = useParams().slug as string;
  console.log(slug);

  const onDisable = async (isEnable: boolean) => {
    await removeTrash(slug);
  };
  const onEnable = async (isDisable: boolean) => {
    await addTrash(slug);
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
      isEnable={false}
      onDisable={onDisable}
      onEnable={onEnable}
    />
  );
};
