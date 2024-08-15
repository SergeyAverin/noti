import styled, { css } from "styled-components";

interface IToolButtonStyledProps {
  isActive: boolean;
}

export const ToolButtonStyled = styled.div<IToolButtonStyledProps>`
  ${(props) =>
    props.isActive &&
    css`
      background: ${(props) => props.theme.color.highlightFaded};
    `}
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: 0.3s;
  user-select: none;
`;
