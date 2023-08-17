import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CellLine } from "./CellLine";
import { CellHeading } from "./CellHeading";
import { CellList } from "./CellList";
import { CellStyled, CellToolsStyled } from "./CellStyled";
import { CellString } from "./CellString";
import { CellCheckbox } from "./CellCheckbox";
import { MenuMode } from "./MenuMode";
import { ICell } from "@redux/types/cell";
import { selectCell } from "@redux/features/noteSlice";
import { RootState } from "@redux/store";
import { AddCell } from "@molecules/AddCell";
import { EditCellProperty } from "@molecules/EditCellProperty/EditCellProperty";
import { Margin } from "@atoms/index";

interface ICellComponentProps {
  cell: ICell;
}

export const Cell: React.FC<ICellComponentProps> = ({ cell }) => {
  const dispatch = useDispatch();
  const selectedCell = useSelector(
    (state: RootState) => state.noteState.selectedCell
  );
  const onClickHeandler = () => {
    dispatch(selectCell(cell.id));
  };
  const [menuMode, setMenuMode] = useState<MenuMode>(MenuMode.CLOSE);

  const onMouseoutHeandler = () => {
    setMenuMode(MenuMode.CLOSE)
  };

  return (
    <CellStyled
      onMouseLeave={onMouseoutHeandler}
      onClick={onClickHeandler}
      isSelected={selectedCell?.id == cell.id}
    >
      <CellToolsStyled>
        <Margin mr={8}>
        <AddCell cell={cell} menuMode={menuMode} setMenuMode={setMenuMode} />
        </Margin>
        <EditCellProperty
          cell={cell}
          menuMode={menuMode}
          setMenuMode={setMenuMode}
        />
      </CellToolsStyled>
      <div>
        {cell.type == "string" && <CellString cell={cell} />}
        {cell.type == "checkbox" && <CellCheckbox cell={cell} />}
        {cell.type == "line" && <CellLine cell={cell} />}
        {cell.type == "heading" && <CellHeading cell={cell} />}
        {cell.type == "list" && <CellList cell={cell} />}
      </div>
    </CellStyled>
  );
};
