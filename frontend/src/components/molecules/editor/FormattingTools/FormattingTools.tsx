import React from "react";

import { Margin, ToolButton } from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

export const FormattingTools: React.FC = () => {
  const execCommand = useExecCommand();

  return (
    <>
      <ToolButton isActive={false} onClick={() => execCommand("italic")}>
        I
      </ToolButton>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand("bold")}>
          B
        </ToolButton>
      </Margin>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand("underline")}>
          U
        </ToolButton>
      </Margin>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand("strikethrough")}>
          S
        </ToolButton>
      </Margin>
    </>
  );
};
