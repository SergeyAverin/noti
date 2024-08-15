import { useGetTrashQuery } from "@redux/api/libraryApi";
import { INote } from "@redux/types/note";

/** This hook return isLoading and notes from trash */
export const useNotesFromTrash = (): [boolean, Array<INote> | undefined] => {
  const { isLoading, data } = useGetTrashQuery();
  return [isLoading, data];
};
