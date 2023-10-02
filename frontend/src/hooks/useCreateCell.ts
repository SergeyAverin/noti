import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addCell } from "@redux/features/noteSlice";
import { Flex, Position } from "@atoms/index";
import { ICell } from "@redux/types/cell";

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

  return parentDivRef;
};
