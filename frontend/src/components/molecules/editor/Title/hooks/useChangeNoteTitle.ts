import { useChangeNoteTitleMutation } from "@redux/api/noteApi";

/** This hook returns a function to update the note header on the server on input blur */
export const useChangeNoteTitle = (slug: string) => {
  const [changeNoteTitle] = useChangeNoteTitleMutation();
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    changeNoteTitle({ slug, title: event.target.value });
  };

  return onBlur;
};
