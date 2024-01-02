import React from "react";
import { Scrollbar } from 'react-scrollbars-custom';

import { RootNotesWrapperStyled, SideBarStyled } from "./SideBarStyled";

import { Margin } from "@atoms/index";
import { TrashDropDown } from "@molecules/TrashDropDown";
import { BookmarkDropDown } from "@molecules/BookmarkDropDown";
import { RootNotes } from "@molecules/RootNotes"
import { AccountManager } from "@molecules/AccountManager";
import { CreateNote } from "@molecules/CreateNote";
import { SearchPanel } from "@organisms/SearchPanel";
import { SettingsPanel } from "@organisms/SettingsPanel";

export const SideBar: React.FC = () => {
  return (
    <SideBarStyled>
        <Margin mb={30}>
          <AccountManager></AccountManager>
        </Margin>
        <Margin mt={5}>
          <CreateNote />
        </Margin>
        <Margin mt={5}>
          <SearchPanel />
        </Margin>
        <Margin mt={5}>
          <SettingsPanel />
        </Margin>

        <TrashDropDown />
        <Margin mt={30}>
          <BookmarkDropDown />
        </Margin>
        <Margin mt={30}>
            <RootNotesWrapperStyled>
              <Scrollbar>
                <RootNotes />
              </Scrollbar>
            </RootNotesWrapperStyled>
        </Margin>
    </SideBarStyled>
  );
};
