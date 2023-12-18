import React from "react";

import { Margin, ToolButton } from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

import MarkerListIcon from "@public/MarkerListIcon.svg";
import NumberListIcon from "@public/NumberListIcon.svg";


export const ListTools: React.FC = () => {
  const execCommand = useExecCommand();

  return (
    <>
      <ToolButton isActive={false} onClick={() => execCommand('insertOrderedList')}>
        <MarkerListIcon />
      </ToolButton>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand('insertUnorderedList')}>
          <NumberListIcon />
        </ToolButton>
      </Margin>
    </>
  );
};
