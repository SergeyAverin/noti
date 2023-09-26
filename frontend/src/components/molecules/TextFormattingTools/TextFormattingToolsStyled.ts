import styled, { css } from "styled-components";

export const TextFormattingToolsStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

interface IToolStyledProps {
  isActive: boolean;
}
export const ToolStyled = styled.div<IToolStyledProps>`
  ${(props) =>
    props.isActive &&
    css`
      background: ${(prosp) => prosp.theme.color.highlightFaded};
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
