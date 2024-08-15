import React from "react";

import { AlignToolsPresentational } from "./AlignToolsPresentational";
import { useExecCommand } from "@hooks/useExecCommand";

/**This component is tools in text editor toolbar.
 *  This component have a buttons to work with text align in text editor.
 */
export const AlignToolsContainer: React.FC = () => {
  const execCommand = useExecCommand();

  return <AlignToolsPresentational execCommand={execCommand} />;
};
