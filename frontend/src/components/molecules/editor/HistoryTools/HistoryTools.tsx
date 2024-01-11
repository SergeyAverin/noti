import React from "react";

import { Icon, Margin, ToolButton } from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

import ArrowBeforeIcon from "@public/ArrowBeforeIcon.svg";
import ArrowAfterIcon from "@public/ArrowAfterIcon.svg";


export const HistoryTools: React.FC = () => {
  const execCommand = useExecCommand();

  return (
    <>
      <ToolButton isActive={false} onClick={() => execCommand('undo')}>
        <Icon icon={<ArrowBeforeIcon />} />
      </ToolButton>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand('redo')}>
          <Icon icon={<ArrowAfterIcon />} />
        </ToolButton>
      </Margin>
    </>
  );
};
