import React from "react";

import { SideBarStyled } from "./SideBarStyled";

import { Margin } from "@atoms/index";
import { Trash } from "@molecules/Trash";
import { Bookmark } from "@molecules/Bookmar";
import { RootNotes } from "@molecules/RootNotes"
import { AccountManager } from "@molecules/AccountManager";
import { AddNote } from "@molecules/AddNote";

export const SideBar: React.FC = () => {
  return (
    <SideBarStyled>
      <Margin mb={60}>
        <AccountManager></AccountManager>
      </Margin>
      <Trash />
      <Margin mt={8}>
        <Bookmark />
      </Margin>
      <Margin mt={30}>
        <RootNotes />
      </Margin>
      <Margin mt={30}>
        <AddNote />
      </Margin>
    </SideBarStyled>
  );
};
