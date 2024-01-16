import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { TFunction } from "i18next";

import { EditorStyled } from "./EditorStyled";

interface IEditorPresentationalProps {
  t: TFunction;
  content: string;
  changeContent: (evt: ContentEditableEvent) => void;
}

export const EditorPresentational: React.FC<IEditorPresentationalProps> = ({
  changeContent,
  content,
  t,
}) => {
  return (
    <>
      <EditorStyled>
        <ContentEditable
          html={content}
          onChange={changeContent}
          placeholder={t("editorPlaceholder")}
        />
      </EditorStyled>
    </>
  );
};
