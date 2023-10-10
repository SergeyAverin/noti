import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { ICell, CellTypeEnum } from "@redux/types/cell";
import {
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Line,
  Quote,
  CellStringStyled,
} from "./CellStyled";
import { useCellInput } from "@hooks/useCellInput";
import { CheckBox } from "./CheckBox";
import { newCellSelector } from "@redux/selectors/note";

interface ICellSelectionProps {
  cell: ICell;
}

export const CellSelection: React.FC<ICellSelectionProps> = ({ cell }) => {
  const [value, setValue] = useCellInput(cell.children, cell.id);
  const newCell = useSelector(newCellSelector);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    if (cell.id == newCell?.id) {
      inputRef.current?.focus();
    }
  })
  const isSelecteCellRef = () => (cell.id == newCell?.id ? inputRef : null);
  return (
    <>
      {cell.type == CellTypeEnum.STRING && (
        <CellStringStyled
          ref={isSelecteCellRef()}
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
          placeholder="/ text"
        >
          {value}
        </CellStringStyled>
      )}
      {cell.type == CellTypeEnum.HEADING_LARGE && (
        <HeadingLarge
          color={cell.property.color}
          ref={isSelecteCellRef()}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
        >
          {value}
        </HeadingLarge>
      )}
      {cell.type == CellTypeEnum.HEADING_MEDIUM && (
        <HeadingMedium
          color={cell.property.color}
          ref={isSelecteCellRef()}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
        >
          {value}
        </HeadingMedium>
      )}
      {cell.type == CellTypeEnum.HEADING_SMALL && (
        <HeadingSmall
          ref={isSelecteCellRef()}
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
          onBlur={setValue}
        >
          {value}
        </HeadingSmall>
      )}
      {cell.type == CellTypeEnum.CHECKBOX && (
        <CheckBox cell={cell} setValue={setValue} data-cell-type={cell.type} />
      )}
      {cell.type == CellTypeEnum.LINE && (
        <Line
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={false}
        />
      )}
      {cell.type == CellTypeEnum.QUOTE && (
        <Quote
          color={cell.property.color}
          styleMode={cell.property.styleMode}
          data-cell-type={cell.type}
          contentEditable={true}
        >
          {value}
        </Quote>
      )}
    </>
  );
};
