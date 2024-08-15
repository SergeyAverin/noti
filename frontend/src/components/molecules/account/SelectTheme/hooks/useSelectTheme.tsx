import { useDispatch, useSelector } from "react-redux";

import { setTheme } from "@redux/features/themeSlice";
import { themeSelector } from "@redux/selectors/theme";
import { themeDict } from "@styles/themeDict";

/** This hook return selected theme and select theme function */
export const useSelectTheme = (): [string, (themName: string) => void] => {
  const dispatch = useDispatch();

  const selectedTheme = Object.keys(themeDict).find(
    (key) => themeDict[key] === theme
  ) as string;
  const theme = useSelector(themeSelector);

  const selectTheme = (themName: string) => {
    const theme = themeDict[themName];
    dispatch(setTheme({ theme, themeName: themName }));
  };

  return [selectedTheme, selectTheme];
};
