import { useRemoveNoteMutation } from "@redux/api/libraryApi";

/** This hook return function to remove note */
export const useRemoveNote = (slug: string) => {
  const [removeTrash] = useRemoveNoteMutation();

  const removeNoteFunc = (event: React.MouseEvent) => {
    event.preventDefault();
    removeTrash(slug);
  };

  return removeNoteFunc;
};
