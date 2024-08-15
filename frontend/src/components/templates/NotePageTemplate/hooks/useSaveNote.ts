import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useSaveNoteMutation } from "@redux/api/noteApi";
import { contentSelector, noteSelector } from "@redux/selectors/note";

export const useSaveNote = () => {
  const content = useSelector(contentSelector);
  const note = useSelector(noteSelector);
  const [saveNote] = useSaveNoteMutation();

  useEffect(() => {
    if (note) {
      saveNote({ slug: note.slug, content: content });
    }
  }, [content]);
};
