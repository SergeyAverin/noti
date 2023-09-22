import React from "react";

import { ContextMenu } from "./ContextMenu";
import { OpenContextMenuButton } from "@atoms/index";

import EditIcon from "@public/EditIcon.svg";
import { ICell } from "@redux/types/cell";

interface ICellPropertyContextMenuProps {
  cell: ICell;
}

export const CellPropertyContextMenu: React.FC<
  ICellPropertyContextMenuProps
> = ({ cell }) => {
  return (
    <OpenContextMenuButton
      contextMenu={<ContextMenu cell={cell} />}
      icon={<EditIcon />}
    />
  );
};
