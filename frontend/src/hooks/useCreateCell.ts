import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addCell } from "@redux/features/noteSlice";
import { Flex, Position } from "@atoms/index";
import { CellTypeEnum, ICell } from "@redux/types/cell";

export const useCreateCell = (cell: ICell) => {
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
            const newCell = {
              children: addedNode.textContent ? addedNode.textContent : "",
              property: {},
              // type: cellType ? cellType : 'string',
              type: CellTypeEnum.STRING,
              id: uuidv4(),
            };
            if (cell.type == CellTypeEnum.CHECKBOX) {
              newCell.type = CellTypeEnum.CHECKBOX;
              dispatch(addCell({ newCell, oldCellId: cell.id }));
            } else {
              dispatch(addCell({ newCell, oldCellId: cell.id }));
            }
          }
        }
      }
    }
  }

  return parentDivRef;
};
