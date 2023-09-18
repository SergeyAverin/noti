import { selectNext, selectPrev } from "@redux/features/noteSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ICell } from "@redux/types/cell";

export const useCellNavigation = (cells: ICell[]) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowDown") {
        dispatch(selectNext());
      } else if (event.key === "ArrowUp") {
        dispatch(selectPrev());
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cells]);
};
