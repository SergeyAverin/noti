import React from "react";

import { ToolsBarStyled } from "./ToolsBarStyled";
import { Separator } from "@atoms/index";
import FontColorTools from "@molecules/editor/FontColorTools";
import BackColorTools from "@molecules/editor/BackColorTools";
import AlignTools from "@molecules/editor/AlignTools";
import HistoryTools from "@molecules/editor/HistoryTools";
import ListTools from "@molecules/editor/ListTools";
import FormatBlockTools from "@molecules/editor/FormatBlockTools";
import FormattingTools from "@molecules/editor/FormattingTools";
import CreateBlocksTools from "@molecules/editor/CreateBlocksTools";

export const ToolsBarPresentational: React.FC = () => {
  return (
    <ToolsBarStyled>
      <HistoryTools />
      <Separator />
      <AlignTools />
      <Separator />
      <FontColorTools />
      <Separator />
      <BackColorTools />
      <Separator />
      <ListTools />
      <Separator />
      <FormatBlockTools />
      <Separator />
      <FormattingTools />
      <Separator />
      <CreateBlocksTools />
    </ToolsBarStyled>
  );
};
