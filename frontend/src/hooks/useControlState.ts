import { useState } from "react";

/** This hook create control state for input
 *   and return state, setState, onChange handler for input
 */
export const useControlInput = (defaultValue: string) => {
  const [state, setState] = useState(defaultValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  return [state, setState, onChange] as [
    string,
    (state: string) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void
  ];
};
