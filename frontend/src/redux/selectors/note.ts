import { RootState } from "@redux/store";

export const cellsSelector = (state: RootState) => state.noteState.content;
export const noteSelector = (state: RootState) => state.noteState.note;
