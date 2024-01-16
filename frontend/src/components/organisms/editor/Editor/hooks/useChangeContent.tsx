import { useCallback } from "react";
import { ContentEditableEvent } from "react-contenteditable";
import { useDispatch, useSelector } from "react-redux";

import { setContent } from "@redux/features/noteSlice";
import { contentSelector } from "@redux/selectors/note";

export const useChangeContent = (): [
  string,
  (evt: ContentEditableEvent) => void
] => {
  const dispatch = useDispatch();
  const content = useSelector(contentSelector);

  const changeContent = useCallback((evt: ContentEditableEvent) => {
    dispatch(setContent(evt.currentTarget.innerHTML));
  }, []);

  return [content, changeContent];
};
