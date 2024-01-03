import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { EditorStyled } from "./EditorStyled";
import { contentSelector } from "@redux/selectors/note";
import { setContent } from "@redux/features/noteSlice";
import { useTranslation } from "react-i18next";


export const Editor: React.FC = () => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector)
  const {t} = useTranslation()

  const onContentChange = useCallback((evt: ContentEditableEvent) => {
    dispatch(setContent(evt.currentTarget.innerHTML));
  }, []);

  return (
    <>
      <EditorStyled>
        <ContentEditable
          html={content}
          onChange={onContentChange}
          placeholder={t('editorPlaceholder')}
        />
      </EditorStyled>
    </>
  );
};
