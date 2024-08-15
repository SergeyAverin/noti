import { useCleanTrashMutation } from "@redux/api/libraryApi";

/** This hook return function to clean trash */
export const useCleanTrash = () => {
  const [cleanTrash] = useCleanTrashMutation();

  const cleanTrashFunc = () => {
    cleanTrash();
  };

  return cleanTrashFunc;
};
