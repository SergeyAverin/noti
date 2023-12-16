import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addCell } from "@redux/features/noteSlice";
import { CellTypeEnum } from "@redux/types/cell";

export const useCreateCell = () => {
  const parentDivRef = useRef<HTMLDivElement>(null);

  createMutationObserver(parentDivRef);

  return parentDivRef;
};

const createMutationObserver = (
  parentDivRef: React.RefObject<HTMLDivElement>
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const parentDiv = parentDivRef.current;

    const onCharacterDataMutation = (mutation: MutationRecord) => {
      /*
      console.log(mutation.target);
      console.log(mutation.target.parentNode);
      */
    };

    const onChildListMutation = (mutation: MutationRecord) => {
      for (const addedNode of mutation.addedNodes) {
        console.log(addedNode);
        if (addedNode && addedNode.nodeName === "DIV") {
          const node = addedNode as HTMLElement;
          const cellId = node.dataset.cellId as string;

          if (node.dataset.name != "paragroph") {
            const newCell = {
              children: addedNode.textContent ? addedNode.textContent : "",
              property: {},
              type: CellTypeEnum.STRING,
              id: uuidv4(),
            };

            dispatch(addCell({ newCell, oldCellId: cellId }));
          } else {
            node.remove();
          }

          /*
          if (cell.type == CellTypeEnum.CHECKBOX) {
            newCell.type = CellTypeEnum.CHECKBOX;
            dispatch(addCell({ newCell, oldCellId: cell.id }));
          } else {
            dispatch(addCell({ newCell, oldCellId: cell.id }));
          }
          */
        }
      }
    };

    if (parentDiv) {
      const observer = new MutationObserver(handleMutation);
      observer.observe(parentDiv, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      return () => observer.disconnect();
    }

    function handleMutation(mutationsList: MutationRecord[]) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          onChildListMutation(mutation);
        } else if (mutation.type === "characterData") {
          onCharacterDataMutation(mutation);
        }
      }
    }
  }, []);
};

/*
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
}*/
