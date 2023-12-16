import styled, { IStyledComponent } from "styled-components";

interface ICellWrapperStyledProps {
  cellToolsStyled: IStyledComponent<any, any>;
}

export const CellWrapperStyled = styled.div<ICellWrapperStyledProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &:hover ${({ cellToolsStyled }) => cellToolsStyled} {
    opacity: 1;
  }
  & * {
    margin: 0;
    outline: none;
  }
`;
