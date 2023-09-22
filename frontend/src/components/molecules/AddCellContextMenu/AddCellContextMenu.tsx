import React from "react";

import { OpenContextMenuButton } from "@atoms/index";
import { ContextMenu } from "./ContextMenu";
import AddIcon from "@public/AddIcon.svg";
import { ICell } from "@redux/types/cell";

interface IAddCellContextMenuProps {
  cell: ICell;
}

export const AddCellContextMenu: React.FC<IAddCellContextMenuProps> = ({
  cell,
}) => {
  return (
    <OpenContextMenuButton
      contextMenu={<ContextMenu cell={cell} />}
      icon={<AddIcon />}
    />
  );
};
