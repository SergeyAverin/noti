import React from "react";

import {
  Circle,
  Position,
  ToolButtonDropDown,
  ToolButtonDropDownItem,
} from "@atoms/index";
import { IPropertyColor } from "@styles/propertyColors";

interface IFontColorToolsPresentationalProps {
  execCommandParam: Function;
  defaultColor: string;
  fontColor: IPropertyColor;
}

export const FontColorToolsPresentational: React.FC<
  IFontColorToolsPresentationalProps
> = ({ execCommandParam, defaultColor, fontColor }) => {
  return (
    <ToolButtonDropDown>
      <Position top="100%" right="4px" position="absolute" zIndex={5}>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", defaultColor)}
        >
          <Circle color={defaultColor} />
          Default
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.grey)}
        >
          <Circle color={fontColor.grey} />
          Grey
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.brown)}
        >
          <Circle color={fontColor.brown} />
          Brown
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.orange)}
        >
          <Circle color={fontColor.orange} />
          Orange
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.yellow)}
        >
          <Circle color={fontColor.yellow} />
          Yellow
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.green)}
        >
          <Circle color={fontColor.green} />
          Green
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.blue)}
        >
          <Circle color={fontColor.blue} />
          Blue
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.purple)}
        >
          <Circle color={fontColor.purple} />
          Purple
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.pink)}
        >
          <Circle color={fontColor.pink} />
          Pink
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => execCommandParam("foreColor", fontColor.red)}
        >
          <Circle color={fontColor.red} />
          Red
        </ToolButtonDropDownItem>
      </Position>
    </ToolButtonDropDown>
  );
};
