import React from "react";
import { useDrop } from "react-dnd";

import { DroppableCellStyled } from "./DroppableCellStyled";

interface DroppableCellProps {
  onDrop: Function;
}

interface CellDropObject {
  type: "cell";
  value: string;
}

export const DroppableCell:React.FC<DroppableCellProps> =({ onDrop })  => {
  const [{ isOver }, drop] = useDrop<CellDropObject, void, { isOver: boolean }>(
    {
      accept: "cell",
      drop: (item) => onDrop(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }
  );

  return (
    <DroppableCellStyled
      ref={drop}
      isOver={isOver}
    ></DroppableCellStyled>
  );
}
