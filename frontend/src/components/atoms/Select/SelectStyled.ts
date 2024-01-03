import styled, { css } from "styled-components";

export const SelectTitleStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

interface ISelectItemStyledProps {
  isOpen: boolean;
}

export const SelectItemsStyled = styled.div<ISelectItemStyledProps>`
  display: block;

  ${(props) =>
    props.isOpen &&
    css`
      display: none;
    `}
`;

export const SelectItemStyled = styled.li`
  font-size: 18px;
  cursor: pointer;
  margin-top: 8px;
  list-style: none;
`;
