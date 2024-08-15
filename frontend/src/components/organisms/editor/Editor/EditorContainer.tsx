import React from "react";
import { useTranslation } from "react-i18next";

import { useChangeContent } from "./hooks/useChangeContent";
import { EditorPresentational } from "./EditorPresentational";

/** This component is text editor */
export const EditorContainer: React.FC = () => {
  const { t } = useTranslation();
  const [content, changeContent] = useChangeContent();

  return (
    <EditorPresentational
      changeContent={changeContent}
      content={content}
      t={t}
    />
  );
};
