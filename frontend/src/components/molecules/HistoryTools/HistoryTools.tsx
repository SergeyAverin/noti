import React from "react";

import { Margin, ToolButton } from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

import ArrowBeforeIcon from "@public/ArrowBeforeIcon.svg";
import ArrowAfterIcon from "@public/ArrowAfterIcon.svg";


export const HistoryTools: React.FC = () => {
  const execCommand = useExecCommand();

  return (
    <>
      <ToolButton isActive={false} onClick={() => execCommand('undo')}>
        <ArrowBeforeIcon />
      </ToolButton>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand('redo')}>
          <ArrowAfterIcon />
        </ToolButton>
      </Margin>
    </>
  );
};
