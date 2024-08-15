import React from "react";

import {
  Position,
  ToolButtonDropDown,
  ToolButtonDropDownItem,
} from "@atoms/index";


interface IFormatBlockToolsPresentationalProps {
  execCommandParam: Function;
}

export const FormatBlockToolsPresentational: React.FC<IFormatBlockToolsPresentationalProps> = ({ execCommandParam }) => {
  return (
    <ToolButtonDropDown>
      <Position top="100%" right="4px" position="absolute" zIndex={5}>
        <ToolButtonDropDownItem onClick={() => execCommandParam("formatBlock", "DIV")}>
          DIV
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => execCommandParam("formatBlock", "H1")}>
          H1
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => execCommandParam("formatBlock", "H2")}>
          H2
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => execCommandParam("formatBlock", "H3")}>
          H3
        </ToolButtonDropDownItem>
      </Position>
    </ToolButtonDropDown>
  );
};
