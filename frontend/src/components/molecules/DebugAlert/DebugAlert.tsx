import React from "react";

import { useSelector } from "react-redux";

import { Position } from "@atoms/index";
import {
  selectRangeEndSelector,
  selectRangeStartSelector,
  selectedCellSelector,
  cellsSelector
} from "@redux/selectors/note";

const DEBUG: boolean = process.env.DEBUG == "true";

export const DebugAlert: React.FC = () => {
  const selectRangeStart = useSelector(selectRangeStartSelector);
  const selectRangeEnd = useSelector(selectRangeEndSelector);
  const selectedCell = useSelector(selectedCellSelector);
  const cell = useSelector(cellsSelector);

  const selectedCellIncex = cell.findIndex(item => item.id == selectedCell?.id)

  return (
    <>
      {DEBUG && (
        <Position position="fixed" bottom="0" right="0">
          selectRangeStart - {selectRangeStart}
          <br />
          selectRangeEnd - {selectRangeEnd}
          <br />
          selectedCell index - {selectedCellIncex}
          <br />
          selectedCell cell number - {selectedCellIncex + 1}
        </Position>
      )}
    </>
  );
};
