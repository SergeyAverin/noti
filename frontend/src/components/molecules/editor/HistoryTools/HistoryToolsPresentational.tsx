import React from "react";

import { Icon, Margin, ToolButton } from "@atoms/index";

import ArrowBeforeIcon from "@public/ArrowBeforeIcon.svg";
import ArrowAfterIcon from "@public/ArrowAfterIcon.svg";

interface IHistoryToolsPresentational {
  execCommand: Function;
}

export const HistoryToolsPresentational: React.FC<
  IHistoryToolsPresentational
> = ({ execCommand }) => {
  return (
    <>
      <ToolButton isActive={false} onClick={() => execCommand("undo")}>
        <Icon icon={<ArrowBeforeIcon />} />
      </ToolButton>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand("redo")}>
          <Icon icon={<ArrowAfterIcon />} />
        </ToolButton>
      </Margin>
    </>
  );
};
