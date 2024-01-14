import React from "react";
import { Scrollbar } from "react-scrollbars-custom";

import { RootNotesWrapperStyled, SideBarStyled } from "./SideBarStyled";
import { Margin } from "@atoms/index";
import TrashDropDown from "@molecules/collection/TrashDropDown";
import BookmarkDropDown from "@molecules/collection/BookmarkDropDown";
import RootNotes from "@molecules/collection/RootNotes";
import { AccountManager } from "@molecules/account/AccountManager";
import CreateNote from "@molecules/collection/CreateNote";
import { SearchPanel } from "@organisms/collection/SearchPanel";
import { SettingsPanel } from "@organisms/account/SettingsPanel";

export const SideBarPresentational: React.FC = () => {
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
