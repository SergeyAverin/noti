import React from "react";

import { Icon, Margin, ToolButton } from "@atoms/index";

import AlignLeftIcon from "@public/AlignLeftIcon.svg";
import AlignRightIcon from "@public/AlignRightIcon.svg";
import AlignCenterIcon from "@public/AlignCenterIcon.svg";
import AlignFullIcon from "@public/AlignFullIcon.svg";
import { useExecCommand } from "@hooks/useExecCommand";

export const AlignTools: React.FC = () => {
  const execCommand = useExecCommand();

  return (
    <>
      <ToolButton isActive={false} onClick={() => execCommand('justifyLeft')}>
        <Icon icon={<AlignLeftIcon />} />
      </ToolButton>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand('justifyCenter')}>
          <Icon icon={<AlignCenterIcon />} />
        </ToolButton>
      </Margin>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand('justifyRight')}>
          <Icon icon={<AlignRightIcon />} />
        </ToolButton>
      </Margin>
      <Margin ml={10}>
        <ToolButton isActive={false} onClick={() => execCommand('justifyFull')}>
          <Icon icon={<AlignFullIcon />} />
        </ToolButton>
      </Margin>
    </>
  );
};
