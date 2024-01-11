import React from "react";

import { Margin, ToolButton } from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

export const CreateBlocksTools: React.FC = () => {
  const execCommand = useExecCommand();
  const createLine = () => {
    const selection = window.getSelection();
    if (selection) {
      const text = selection.toString();
      console.log(text);
      execCommand("insertHTML", '<hr  contenteditable="false" />');
    }
  };

  return (
    <>
      <ToolButton
        isActive={false}
        onClick={() => {
          createLine();
        }}
      >
        Line
      </ToolButton>
    </>
  );
};
