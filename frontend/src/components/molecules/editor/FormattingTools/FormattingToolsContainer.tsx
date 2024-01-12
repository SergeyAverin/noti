import React from "react";

import { FormattingToolsPresentational } from "./FormattingToolsPresentational";
import { useExecCommand } from "@hooks/useExecCommand";

/**This component is tools in text editor toolbar.
 *  This component have a buttons to work with text format in text editor.
 */
export const FormattingToolsContainer: React.FC = () => {
  const execCommand = useExecCommand();

  return <FormattingToolsPresentational execCommand={execCommand} />;
};
