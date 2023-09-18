import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addCell, selectNext } from "@redux/features/noteSlice";

export const useCreateCellHotKey = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();
        dispatch(addCell());
        dispatch(selectNext());
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
