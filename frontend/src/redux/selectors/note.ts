import { RootState } from "@redux/store";

export const selectedCellSelector = (state: RootState) =>
  state.noteState.selectedCell;
export const cellsSelector = (state: RootState) => state.noteState.content;
export const noteSelector = (state: RootState) => state.noteState.note;

export const selectRangeStartSelector = (state: RootState) =>
  state.noteState.selectRangeStart;
export const selectRangeEndSelector = (state: RootState) =>
  state.noteState.selectRangeEnd;
