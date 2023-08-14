import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NoteStyled } from "./NoteStyled";
import { INote } from "@redux/types/note";
import { RootState } from "@redux/store";
import { Margin } from "@atoms/index";
import { Title } from "@molecules/Title";
import { Cell } from "@molecules/Cell";
import { pushCell } from "@redux/features/noteSlice";

interface INoteProps {
  note: INote;
}

export const Note: React.FC<INoteProps> = ({ note }) => {
  const cells = useSelector((state: RootState) => state.noteState.content);
  const dispatch = useDispatch()
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        dispatch(pushCell())
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <NoteStyled>
      <Title title={note.title} />
      {cells.map((cell) => (
        <Margin mt={20}>
          <Cell cell={cell} />
        </Margin>
      ))}
    </NoteStyled>
  );
};
