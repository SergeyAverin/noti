import React from "react";
import { useTheme } from "styled-components";

import { DropDownToolItem } from "./DropDownTool";
import { DropDownMenu, Position } from "@atoms/index";

import AlignFullIcon from "@public/AlignFullIcon.svg";


export const FormatBlock: React.FC = () => {
    const changeFormatBlock = (blockName: string) => {
      const selection = window.getSelection();
      if (selection) {
        document.execCommand("formatBlock", false, blockName);
      }
    };
  
    const onMouseDown = (event: React.MouseEvent) => {
      event.preventDefault();
      blur();
    };
  
    return (
      <Position position="relative" top="0" left="0">
        <DropDownMenu text="" icon={<AlignFullIcon />}>
          <div onMouseDown={onMouseDown}>
            <Position position="absolute" top="100%" right="10px">

              <DropDownToolItem
                onClick={(event: React.MouseEvent) => {
                  changeFormatBlock('H1');
                }}
              >
                h1
              </DropDownToolItem>

              <DropDownToolItem
                onClick={(event: React.MouseEvent) => {
                  changeFormatBlock('DIV');
                }}
              >
                Div
              </DropDownToolItem>

              <DropDownToolItem
                onClick={(event: React.MouseEvent) => {
                  changeFormatBlock('H2');
                }}
              >
                h2
              </DropDownToolItem>

              <DropDownToolItem
                onClick={(event: React.MouseEvent) => {
                  changeFormatBlock('H3');
                }}
              >
                h3
              </DropDownToolItem>

            </Position>
          </div>
        </DropDownMenu>
      </Position>
    );
}
