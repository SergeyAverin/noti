import React from "react";

import {
  Position,
  ToolButtonDropDown,
  ToolButtonDropDownItem,
} from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

export const FormatBlockTools: React.FC = () => {
  const execCommand = useExecCommand();

  const formatBlock = (color: string) => {
    execCommand("formatBlock", color);
  };

  return (
    <ToolButtonDropDown>
      <Position top="100%" right="4px" position="absolute" zIndex={5}>
        <ToolButtonDropDownItem onClick={() => formatBlock("DIV")}>
          DIV
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => formatBlock("H1")}>
          H1
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => formatBlock("H2")}>
          H2
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => formatBlock("H3")}>
          H3
        </ToolButtonDropDownItem>
      </Position>
    </ToolButtonDropDown>
  );
};
