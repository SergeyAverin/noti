import { useState } from "react";

/** This hook return isOpened popup state and function to change this state */
export const usePopup = (): [boolean, Function] => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleIsOpened = () => {
    setIsOpened((prev) => !prev);
  };
  return [isOpened, toggleIsOpened];
};
