import React from "react";
import { Scrollbar } from 'react-scrollbars-custom';

import { RootNotesWrapperStyled, SideBarStyled } from "./SideBarStyled";

import { Margin } from "@atoms/index";
import { TrashDropDown } from "@molecules/TrashDropDown";
import { BookmarkDropDown } from "@molecules/BookmarkDropDown";
import { RootNotes } from "@molecules/RootNotes"
import { AccountManager } from "@molecules/AccountManager";
import { CreateNote } from "@molecules/CreateNote";

export const SideBar: React.FC = () => {
  return (
    <SideBarStyled>
        <Margin mb={60}>
          <AccountManager></AccountManager>
        </Margin>
        <TrashDropDown />
        <Margin mt={25}>
          <BookmarkDropDown />
        </Margin>
        <Margin mt={30}>
          <CreateNote />
        </Margin>
        <Margin mt={15}>
            <RootNotesWrapperStyled>
              <Scrollbar>
                <RootNotes />
              </Scrollbar>
            </RootNotesWrapperStyled>
        </Margin>
    </SideBarStyled>
  );
};
for (let a of [1,3,4,5]) {
  console.log(a)
  if (a> 4) {
    console.log(a)
    console.log(`${a}(a) > 4`)
  }
}