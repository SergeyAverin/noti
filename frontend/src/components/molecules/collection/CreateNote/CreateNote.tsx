import React from "react";

import { useCreateNoteMutation } from "@redux/api/noteApi";
import { SideBarTool } from "@atoms/ui/SideBarTools/SideBarTool";

import AddIcon from "@public/AddIcon.svg";
import { Icon } from "@atoms/index";
import { useTranslation } from "react-i18next";

export const CreateNote: React.FC = () => {
  const [createMutation] = useCreateNoteMutation();
  const { t } = useTranslation()
  const clickHeandler = () => {
    createMutation({title: t('newNote')})
  }
  return (
    <SideBarTool onClick={clickHeandler} icon={<Icon icon={<AddIcon />} />} text={t('createNote')} />
  );
};
