import React, { useEffect, useState } from "react";
import {
  TextFormattingToolsStyled,
  ToolStyled,
  SeparatorStyled
} from "./TextFormattingToolsStyled";
import { Flex, Margin, Position } from "@atoms/index";
import { Tool } from "./Tool";
import { DropDownTool, BackgroundColor } from "./DropDownTool";

import AlignLeftIcon from '@public/AlignLeftIcon.svg';
import AlignRightIcon from '@public/AlignRightIcon.svg';
import AlignCenterIcon from '@public/AlignCenterIcon.svg';
import AlignFullIcon from '@public/AlignFullIcon.svg';
import MarkerListIcon from '@public/MarkerListIcon.svg';
import NumberListIcon from '@public/NumberListIcon.svg'
import ArrowBeforeIcon from '@public/ArrowBeforeIcon.svg'
import ArrowAfterIcon from '@public/ArrowAfterIcon.svg'



export const TextFormattingTools: React.FC = () => {
  const [commandsStates, setCommandsStates] = useState({
    isItalic: false,
    isBold: false,
    isUnderline: false,
    isStrikethrough: false
  })
  const  getSelect = (action: string) => {
    const selection = window.getSelection();
    if (selection) {
        const selectedText = selection.toString();
        document.execCommand(action, false, selectedText);
        const isItalic = document.queryCommandState("italic");
        const isBold = document.queryCommandState("bold");
        const isUnderline = document.queryCommandState("underline");
        const isStrikethrough = document.queryCommandState("strikethrough");
        setCommandsStates({
          isItalic: isItalic,
          isBold: isBold,
          isUnderline: isUnderline,
          isStrikethrough: isStrikethrough
        })
    }
  }

  return (
    <TextFormattingToolsStyled>
      <Flex alignItems="center" justifyContent="flex-start">

        <Margin>
            <Tool isActive={commandsStates.isUnderline}  onClick={() => {getSelect('undo')}}>
              <ArrowBeforeIcon />
            </Tool>
          </Margin>
        <Margin ml={15} mr={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('redo')}}>
            <ArrowAfterIcon />
          </Tool>
        </Margin>

        <SeparatorStyled />

        <Margin>
          <DropDownTool />
        </Margin>
        <SeparatorStyled />

        <Margin>
          <BackgroundColor />
        </Margin>
        

        <SeparatorStyled />

        <Tool isActive={commandsStates.isItalic} onClick={() => {getSelect('italic')}}>I</Tool>
        <Margin ml={15}>
          <Tool isActive={commandsStates.isBold}  onClick={() => {getSelect('bold')}}>B</Tool>
        </Margin>
        <Margin ml={15}>
          <Tool isActive={commandsStates.isUnderline}  onClick={() => {getSelect('underline')}}>U</Tool>
        </Margin>
        <Margin ml={15} mr={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('strikethrough')}}>S</Tool>
        </Margin>

        <SeparatorStyled />

        <Margin ml={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('justifyLeft')}}>
            <AlignLeftIcon />
          </Tool>
        </Margin>

        <Margin ml={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('justifyCenter')}}>
           <AlignCenterIcon />
          </Tool>
        </Margin>

        <Margin ml={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('justifyRight')}}>
            <AlignRightIcon />
          </Tool>
        </Margin>

        <Margin ml={15} mr={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('justifyFull')}}>
           <AlignFullIcon />
          </Tool>
        </Margin>

        <SeparatorStyled />

        <Margin ml={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('insertOrderedList')}}>
            <MarkerListIcon />
          </Tool>
        </Margin>

        <Margin ml={15} mr={15}>
          <Tool isActive={commandsStates.isStrikethrough}  onClick={() => {getSelect('insertUnorderedList')}}>
            <NumberListIcon />
          </Tool>
        </Margin>

      </Flex>
    </TextFormattingToolsStyled>
  );
};
