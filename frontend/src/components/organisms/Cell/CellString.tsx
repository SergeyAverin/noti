import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ICell } from "@redux/types/cell";
import { useCellInput } from "@hooks/useCellInput";

interface ICellString {
  cell: ICell;
}

const CellStringStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  outline: none;
  &::placeholder {
    color: red;
  }
`;

export const CellString: React.FC<ICellString> = ({ cell }) => {
  const [value, setValue] = useCellInput(cell.children, cell.id);
  const [content, setContent] = useState("");

  const handleChange = (evt: React.FormEvent<HTMLDivElement>): void => {
    console.log(content);
    setContent(evt.currentTarget.innerHTML);
  };
  return (
    <CellStringStyled
      onInput={handleChange}
      contentEditable={true}
      suppressContentEditableWarning={true}
      placeholder="placeholder"
    >
      {value}
    </CellStringStyled>
  );
};
