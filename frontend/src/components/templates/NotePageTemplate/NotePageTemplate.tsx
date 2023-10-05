import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NoteContentStyled, NoteStyled } from "./NotePageTemplateStyled";
import { Flex, Margin, Position, Width } from "@atoms/index";
import { Title } from "@molecules/Title";
import { DebugAlert } from "@molecules/DebugAlert";
import { TrashAlert } from "@organisms/TrashAlert";
import { NotificationList } from "@organisms/NotificationList";
import { Cell } from "@organisms/Cell";
import { INote } from "@redux/types/note";
import { cellsSelector } from "@redux/selectors/note";
import { TextFormattingTools } from "@molecules/TextFormattingTools";
import { changeCellPosition } from "@redux/features/noteSlice";
import { ICell } from "@redux/types/cell";
import { DroppableCell } from "@molecules/DroppableCell";

interface INotePageTemplateProps {
  note: INote;
}


export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({
  note,
}) => {
  const dispatch = useDispatch();
  const cells = useSelector(cellsSelector);
  const handleDrop = (item: {cell: ICell}, index: number) => {
    dispatch(changeCellPosition({cell: item.cell, index: index}))
  };
  return (
    <div>
      <NoteStyled>
        <Width width="50%" isMarginAuto={true}>
          <Position position="relative">
            <TextFormattingTools />
            <Margin mt={50} mb={30}>
              <Title title={note.title} slug={note.slug} />
            </Margin>
            <DroppableCell onDrop={(item:  {cell: ICell}) => handleDrop(item, 0)} />
            <div contentEditable={true} style={{outline: 'none'}}>
              {cells.map((cell, index) => (
                <>
                  <Cell cell={cell}  key={cell.id} />
                  <DroppableCell onDrop={(item:  {cell: ICell}) => handleDrop(item, index+1)} />
                </>

              ))}
            </div>
          </Position>
        </Width>
      </NoteStyled>
      {note.isTrash && <TrashAlert note={note} />}
      <NotificationList />
      <DebugAlert />
    </div>
  );
};
