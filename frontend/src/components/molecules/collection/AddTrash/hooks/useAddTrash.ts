import {
  useAddTrashMutation,
  useRemoveTrashMutation,
} from "@redux/api/libraryApi";

/** This hook return functions to add and remove note from trash  */
export const useAddTrash = (slug: string): [Function, Function] => {
  const [addTrash] = useAddTrashMutation();
  const [removeTrash] = useRemoveTrashMutation();

  const removeTrashFunc = async () => {
    await removeTrash(slug);
  };
  const addTrashFunc = async () => {
    await addTrash(slug);
  };
  return [addTrashFunc, removeTrashFunc];
};
