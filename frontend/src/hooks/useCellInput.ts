import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { changeCellChildren } from "@redux/features/noteSlice";

export function useCellInput(
  initialValue: string,
  cellId: string
): [string, (event: React.SyntheticEvent<HTMLDivElement>) => void] {
  const dispatch = useDispatch();
  console.log(12213);
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    (event: React.SyntheticEvent<HTMLDivElement>) => {
      setValue(event.currentTarget.innerHTML);
      dispatch(
        changeCellChildren({
          cellId: cellId,
          value: event.currentTarget.innerHTML,
        })
      );
    },
    []
  );

  return [value, handleChange];
}
