import React from "react";

import { Icon, Margin, ToolButton } from "@atoms/index";

import MarkerListIcon from "@public/MarkerListIcon.svg";
import NumberListIcon from "@public/NumberListIcon.svg";

interface IListToolsPresentationalProps {
  execCommand: Function;
}

export const ListToolsPresentational: React.FC<IListToolsPresentationalProps> = ({
  execCommand,
}) => {
  return (
    <>
      <ToolButton
        isActive={false}
        onClick={() => execCommand("insertOrderedList")}
      >
        <Icon icon={<MarkerListIcon />} />
      </ToolButton>
      <Margin ml={10}>
        <ToolButton
          isActive={false}
          onClick={() => execCommand("insertUnorderedList")}
        >
          <Icon icon={<NumberListIcon />} />
        </ToolButton>
      </Margin>
    </>
  );
};
