import React, { ReactNode } from "react";
import { DefaultTheme } from "styled-components/dist/types";

import { NoteStyled, NoteWrapperStyled } from "./NotePageTemplateStyled";
import { Margin } from "@atoms/index";

interface INotePageTemplatePresentationalProps {
  isTrash: boolean;
  header: ReactNode;
  sideBar: ReactNode;
  toolsBar: ReactNode;
  title: ReactNode;
  editor: ReactNode;
  notification: ReactNode;
  trashAlert: ReactNode;
  theme: DefaultTheme;
}

export const NotePageTemplatePresentational: React.FC<
  INotePageTemplatePresentationalProps
> = ({
  isTrash,
  editor,
  header,
  sideBar,
  toolsBar,
  title,
  trashAlert,
  notification,
  theme,
}) => {
  return (
    <>
      {header}
      {sideBar}

      <NoteWrapperStyled>
        <Margin mt={parseInt(theme.panelsSize.headerSize)}>{toolsBar}</Margin>
        <NoteStyled>
          {title}
          <Margin mt={30}>{editor}</Margin>
        </NoteStyled>
      </NoteWrapperStyled>

      {isTrash && trashAlert}
      {notification}
    </>
  );
};
