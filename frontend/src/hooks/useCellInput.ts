import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { changeCellChildren } from "@redux/features/noteSlice";

export function useCellInput(
  initialValue: string,
  cellId: string
): [string, (event: React.FocusEvent<HTMLHeadingElement>) => void] {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(
    (event: React.FocusEvent<HTMLHeadingElement>) => {
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
