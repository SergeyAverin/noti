import React from "react";

import { ToolButton } from "@atoms/index";

interface ICreateBlocksToolsPresentationalProps {
  createLine: Function;
}

export const CreateBlocksToolsPresentational: React.FC<
  ICreateBlocksToolsPresentationalProps
> = ({ createLine }) => {
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
