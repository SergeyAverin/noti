import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} from "@redux/api/libraryApi";

/** This hook return functions to add and remove note from bookmark  */
export const useAddBookmark = (slug: string): [Function, Function] => {
  const [addBookmark] = useAddBookmarkMutation();
  const [removeBookmark] = useRemoveBookmarkMutation();

  const removeBookmarkFunc = async () => {
    await removeBookmark(slug);
  };
  const addBookmarkFunc = async () => {
    await addBookmark(slug);
  };

  return [addBookmarkFunc, removeBookmarkFunc];
};
