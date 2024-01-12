import { useEffect } from "react";

/** This hook update title on opened new note */
export const useLoadTitle = (
  title: string,
  setTitleState: (title: string) => void
) => {
  useEffect(() => {
    setTitleState(title);
  }, [title]);
};
