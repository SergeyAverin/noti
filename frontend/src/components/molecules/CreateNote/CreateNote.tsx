import React from "react";

import { useCreateNoteMutation } from "@redux/api/noteApi";
import { SideBarTool } from "@atoms/SideBarTools/SideBarTool";

import AddIcon from "@public/AddIcon.svg";
import { Icon } from "@atoms/index";

export const CreateNote: React.FC = () => {
  const [createMutation] = useCreateNoteMutation();
  const clickHeandler = () => {
    createMutation({title: 'New note'})
  }
  return (
    <SideBarTool onClick={clickHeandler} icon={<Icon icon={<AddIcon />} />} text="Create note" />
  );
};
