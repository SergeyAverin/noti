import { useRemoveTrashMutation } from "@redux/api/libraryApi";

/** This hook return function to restore note */
export const useRestoreNote = (slug: string) => {
  const [restoreTrash] = useRemoveTrashMutation();

  const restoreNoteFunc = (event: React.MouseEvent) => {
    event.preventDefault();
    restoreTrash(slug);
  };

  return restoreNoteFunc;
};
