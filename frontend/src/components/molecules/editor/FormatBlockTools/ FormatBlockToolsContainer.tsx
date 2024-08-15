import React from "react";

import { FormatBlockToolsPresentational } from "./FormatBlockToolsPresentational";
import { useExecCommandParams } from "@hooks/useExecCommandParams";

/** This component is tools in text editor toolbar.
 *  This component have a buttons to replace html tags in text editor.
 */
export const  FormatBlockToolsContainer: React.FC = () => {
  const execCommand = useExecCommandParams();

  return <FormatBlockToolsPresentational execCommandParam={execCommand} />;
};
