import React from "react";
import { useTheme } from "styled-components";

import { BackColorToolsPresentational } from "./BackColorToolsPresentational";
import { useExecCommandParams } from "@hooks/useExecCommandParams";

/** This component is tools in text editor toolbar.
 *  This component have a buttons to change text back color in text editor.
 */
export const BackColorToolsContainer: React.FC = () => {
  const execCommand = useExecCommandParams();
  const theme = useTheme();
  const fontColor = theme.propertyColor.bg;
  const defaultColor = "rgba(0, 0, 0, 0)";

  return (
    <BackColorToolsPresentational
      execCommandParam={execCommand}
      defaultColor={defaultColor}
      fontColor={fontColor}
    />
  );
};
