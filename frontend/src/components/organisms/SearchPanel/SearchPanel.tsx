import React, { useState } from "react";

import { NoteLink, Popup } from "@atoms/index";
import { SearchButton } from "@molecules/SearchButton";
import { SearchInput } from "@molecules/SearchInput/SearchInput";

export const SearchPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const clickHeandler = () => {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
    <SearchButton clickHeandler={clickHeandler} />
    {isOpen && (
        <Popup closeFunction={clickHeandler}>
              <SearchInput />
              <NoteLink haveBackground={true} href={`/notes/2}`}>
                werwer
            </NoteLink>
            <NoteLink haveBackground={true} href={`/notes/2}`}>
                werwer
            </NoteLink>
            <NoteLink haveBackground={true} href={`/notes/2}`}>
                werwer
            </NoteLink>
            <NoteLink haveBackground={true} href={`/notes/2}`}>
                werwer
            </NoteLink>
        </Popup>
      )}
    </>
  );
};
