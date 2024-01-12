import React from "react";

import { ListToolsPresentational } from "./ListToolsPresentational";
import { useExecCommand } from "@hooks/useExecCommand";

/**This component is tools in text editor toolbar
 *  This component have a buttons to create lists in text
 */
export const ListToolsContainer: React.FC = () => {
  const execCommand = useExecCommand();

  return <ListToolsPresentational execCommand={execCommand} />;
};
