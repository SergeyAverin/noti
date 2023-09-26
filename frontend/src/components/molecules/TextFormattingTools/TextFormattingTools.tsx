import React, { useEffect } from "react";
import {
  TextFormattingToolsStyled,
  ToolStyled,
} from "./TextFormattingToolsStyled";
import { Flex, Margin, Position } from "@atoms/index";
import { Tool } from "./Tool";

export const TextFormattingTools: React.FC = () => {
  const selection = window.getSelection();
  const  getSelect = (action: string) => {
    const selection = window.getSelection();
    if (selection) {
        const selectedText = selection.toString();
        document.execCommand(action, false, selectedText);
    }
  }
  const clk = () => {
    const selection = window.getSelection();
      if (selection) {
          const selectedText = selection.containsNode;
      }
  };
  return (
    <TextFormattingToolsStyled>
      <Flex alignItems="center" justifyContent="flex-start">
        <Tool onClick={() => {getSelect('italic')}}>I</Tool>
        <Margin ml={15}>
          <Tool onClick={() => {getSelect('bold')}}>B</Tool>
        </Margin>
        <Margin ml={15}>
          <Tool onClick={() => {getSelect('underline')}}>U</Tool>
        </Margin>
        <Margin ml={15}>
          <Tool onClick={() => {getSelect('strikethrough')}}>S</Tool>
        </Margin>
        <Margin ml={15}>
          <Tool onClick={clk}>clk</Tool>
        </Margin>
      </Flex>
    </TextFormattingToolsStyled>
  );
};
