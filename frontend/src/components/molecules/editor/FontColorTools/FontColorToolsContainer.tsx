import React from "react";
import { useTheme } from "styled-components";

import { FontColorToolsPresentational } from "./FontColorToolsPresentational";
import { useExecCommandParams } from "@hooks/useExecCommandParams";

/** This component is tools in text editor toolbar.
 *  This component have a buttons to change text font color in text editor.
 */
export const FontColorToolsContainer: React.FC = () => {
  const execCommand = useExecCommandParams();
  const theme = useTheme();
  const fontColor = theme.propertyColor.fg;
  const defaultColor = theme.color.fg;

  return (
    <FontColorToolsPresentational
      execCommandParam={execCommand}
      defaultColor={defaultColor}
      fontColor={fontColor}
    />
  );
};
