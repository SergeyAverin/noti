import React from "react";
import  { useTheme } from "styled-components";

import {
  CircleStyled,
  Position,
  ToolButtonDropDown,
  ToolButtonDropDownItem,
} from "@atoms/index";
import { useExecCommand } from "@hooks/useExecCommand";

export const FontColorTools: React.FC = () => {
  const execCommand = useExecCommand();
  const theme = useTheme();
  const fontColor = theme.propertyColor.fg;
  const defaultColor = theme.color.fg;

  const changeFontColor = (color: string) => {
    execCommand("foreColor", color);
  };

  return (
    <ToolButtonDropDown>
      <Position top="100%" right="4px" position="absolute" zIndex={5}>
        <ToolButtonDropDownItem onClick={() => changeFontColor(defaultColor)}>
          <CircleStyled color={defaultColor} />
          Default
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => changeFontColor(fontColor.grey)}>
         <CircleStyled color={fontColor.grey} />
          Grey
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => changeFontColor(fontColor.brown)}
        >
         <CircleStyled color={fontColor.brown} />
          Brown
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => changeFontColor(fontColor.orange)}
        >
         <CircleStyled color={fontColor.orange} />
          Orange
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => changeFontColor(fontColor.yellow)}
        >
         <CircleStyled color={fontColor.yellow} />
          Yellow
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => changeFontColor(fontColor.green)}
        >
         <CircleStyled color={fontColor.green} />
          Green
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => changeFontColor(fontColor.blue)}>
         <CircleStyled color={fontColor.blue} />
          Blue
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem
          onClick={() => changeFontColor(fontColor.purple)}
        >
         <CircleStyled color={fontColor.purple} />
          Purple
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => changeFontColor(fontColor.pink)}>
         <CircleStyled color={fontColor.pink} />
          Pink
        </ToolButtonDropDownItem>
        <ToolButtonDropDownItem onClick={() => changeFontColor(fontColor.red)}>
         <CircleStyled color={fontColor.red} />
          Red
        </ToolButtonDropDownItem>
      </Position>
    </ToolButtonDropDown>
  );
};
