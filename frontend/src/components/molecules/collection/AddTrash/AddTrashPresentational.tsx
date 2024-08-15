import React from "react";
import { DefaultTheme } from "styled-components";

import { Icon, ToggleButton } from "@atoms/index";

import TrashIcon from "@public/TrashIcon.svg";

interface IAddTrashPresentationalProps {
  theme: DefaultTheme;
  isEnable: boolean;
  addBookmark: Function;
  removeBookmark: Function;
}

export const AddTrashPresentational: React.FC<IAddTrashPresentationalProps> = ({
  theme,
  isEnable,
  addBookmark,
  removeBookmark,
}) => {
  return (
    <ToggleButton
      iconDisable={<TrashIcon stroke={theme?.color.fg} />}
      iconEnable={
        <Icon
          icon={
            <TrashIcon
              fill={theme?.color.highlight}
              stroke={theme?.color.highlight}
            />
          }
        />
      }
      isEnable={isEnable}
      onDisable={removeBookmark}
      onEnable={addBookmark}
    />
  );
};
