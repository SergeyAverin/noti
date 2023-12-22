import React from "react";

import { ToolsBarStyled } from "./ToolsBarStyled";
import { Separator } from "@atoms/index";

import { FontColorTools } from "@molecules/FontColorTools";
import { BackColorTools } from "@molecules/BackColorTools";
import { AlignTools } from "@molecules/AlignTools/AlignTools";
import { HistoryTools } from "@molecules/HistoryTools";
import { ListTools } from "@molecules/ListTools";
import { FormatBlockTools } from "@molecules/FormatBlockTools";
import { FormattingTools } from "@molecules/FormattingTools";
import { CreateBlocksTools } from "@molecules/CreateBlocksTools";


export const ToolsBar: React.FC = () => {
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
