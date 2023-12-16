import React from "react";
import styled, { useTheme } from "styled-components";

import { DropDownMenu, Position } from "@atoms/index";

import AlignFullIcon from "@public/AlignFullIcon.svg";

const DropDownToolItem = styled.div`
  background: ${(props) => props.theme.color.secondary};
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.color.fg};
  cursor: pointer;
  transition: 0.3s;
  min-width: 100px;
  &:hover {
    background: ${(props) => props.theme.color.primary};
    transition: 0.3s;
  }
`;

export const DropDownTool: React.FC = () => {
  const theme = useTheme();

  const changeColor = (color: string) => {
    const selection = window.getSelection();
    if (selection) {
      const selectedText = selection.toString();
      document.execCommand("foreColor", false, color);
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
                changeColor(theme.color.fg);
              }}
            >
              default
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.grey);
              }}
            >
              grey
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.brown);
              }}
            >
              brown
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.orange);
              }}
            >
              orange
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.yellow);
              }}
            >
              yellow
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.green);
              }}
            >
              green
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.blue);
              }}
            >
              blue
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.purple);
              }}
            >
              purple
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.pink);
              }}
            >
              pink
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.fg.red);
              }}
            >
              red
            </DropDownToolItem>
          </Position>
        </div>
      </DropDownMenu>
    </Position>
  );
};


export const BackgroundColor: React.FC = () => {
  const theme = useTheme();

  const changeColor = (color: string) => {
    const selection = window.getSelection();
    if (selection) {
      const selectedText = selection.toString();
      document.execCommand("backColor", false, color);
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
                changeColor('rgba(0, 0, 0, 0)');
              }}
            >
              default
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.grey);
              }}
            >
              grey
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.brown);
              }}
            >
              brown
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.orange);
              }}
            >
              orange
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.yellow);
              }}
            >
              yellow
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.green);
              }}
            >
              green
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.blue);
              }}
            >
              blue
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.purple);
              }}
            >
              purple
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.pink);
              }}
            >
              pink
            </DropDownToolItem>
            <DropDownToolItem
              onClick={(event: React.MouseEvent) => {
                changeColor(theme.propertyColor.bg.red);
              }}
            >
              red
            </DropDownToolItem>
          </Position>
        </div>
      </DropDownMenu>
    </Position>
  );
};
