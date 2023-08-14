import styled, { css } from "styled-components";

export const CellContentStyled = styled.div``;

export const CellToolsStyled = styled.div`
  position: absolute;
  left: -30px;
  display: flex;
  opacity: 0;
  transition: 0.2s;
`;

interface ICellStyledProps {
  isSelected: boolean;
}
export const CellStyled = styled.div<ICellStyledProps>`
  position: relative;

  ${(props) =>
    props.isSelected &&
    process.env.DEBUG &&
    css`
      border: 2px solid red;
    `}

  &:hover > ${CellToolsStyled} {
    opacity: 1;
  }
`;

export const CellStringStyled = styled.input`
  font-size: 18px;

  background: none;
  border: none;
  color: ${(props) => props.theme.color.fg};
  outline: 0;
  width: 100%;
  white-space: nowrap;
  overflow-y: auto;
  text-overflow: ellipsis;
`;

export const CellCheckboxStyled = styled.input.attrs({ type: "checkbox" })`
  font-size: 18px;

  background: none;
  border: none;
  color: ${(props) => props.theme.color.fg};
  outline: 0;
  width: 100%;
  white-space: nowrap;
  overflow-y: auto;
  text-overflow: ellipsis;
`;

export const CellCheckboxWrapperStyled = styled.div`
  display: flex;
`;
