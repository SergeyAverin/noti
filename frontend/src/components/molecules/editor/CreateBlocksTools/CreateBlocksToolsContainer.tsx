import React from "react";

import { CreateBlocksToolsPresentational } from "./CreateBlocksToolsPresentational";
import { useCreateLineBlocks } from "./hooks/useCreateLineBlocks";

/** This component is tools in text editor toolbar.
 *  This component have a buttons to create html tags in text editor.
 */
export const CreateBlocksToolsContainer: React.FC = () => {
  const createLine = useCreateLineBlocks();

  return <CreateBlocksToolsPresentational createLine={createLine} />;
};
