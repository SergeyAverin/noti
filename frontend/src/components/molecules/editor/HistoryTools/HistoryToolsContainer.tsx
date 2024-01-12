import React from "react";

import { HistoryToolsPresentational } from "./HistoryToolsPresentational";
import { useExecCommand } from "@hooks/useExecCommand";

/**This component is tools in text editor toolbar.
 *  This component have a buttons to work with history in text editor.
 */
export const ListToolsContainer: React.FC = () => {
  const execCommand = useExecCommand();

  return <HistoryToolsPresentational execCommand={execCommand} />;
};
