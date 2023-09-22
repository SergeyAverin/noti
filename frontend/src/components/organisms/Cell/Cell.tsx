import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { CellSelection } from "./CellSelection";
import { CellStyled, CellTools, CellWrapper } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { addCell } from "@redux/features/noteSlice";
import { Flex, Position } from "@atoms/index";
import { AddCellContextMenu } from "@molecules/AddCellContextMenu";
import { CellPropertyContextMenu } from "@molecules/CellPropertyContextMenu";

interface ICellProps {
  cell: ICell;
}

export const Cell: React.FC<ICellProps> = ({ cell }) => {
  const parentDivRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const parentDiv = parentDivRef.current;
    if (parentDiv) {
      const observer = new MutationObserver(handleMutation);
      observer.observe(parentDiv, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, []);

  function handleMutation(mutationsList: MutationRecord[]) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode && addedNode.nodeName === "DIV") {
            (addedNode as HTMLElement).remove();
            const cellType = (addedNode as HTMLElement).getAttribute(
              "data-cell-type"
            );
            const newCell: ICell = {
              children: addedNode.textContent ? addedNode.textContent : "_",
              property: {},
              // type: cellType ? cellType : 'string',
              type: "string",
              id: uuidv4(),
            };
            dispatch(addCell({ newCell, oldCellId: cell.id }));
          }
        }
      }
    }
  }
  return (
    <CellWrapper>
        <CellStyled ref={parentDivRef}>
          <CellSelection cell={cell} />
        </CellStyled>
        <CellTools>
            <AddCellContextMenu />
            <CellPropertyContextMenu />
        </CellTools>
    </CellWrapper>
  );
};
