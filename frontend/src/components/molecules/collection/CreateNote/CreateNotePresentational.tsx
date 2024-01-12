import React from "react";
import { TFunction } from "i18next";

import { Icon, SideBarTool } from "@atoms/index";

import AddIcon from "@public/AddIcon.svg";

interface ICreateNotePresentationalProps {
  createNote: Function;
  t: TFunction;
}

export const CreateNotePresentational: React.FC<
  ICreateNotePresentationalProps
> = ({ t, createNote }) => {
  return (
    <SideBarTool
      onClick={() => createNote()}
      icon={<Icon icon={<AddIcon />} />}
      text={t("createNote")}
    />
  );
};
