import styled, { css } from "styled-components";

export const TextFormattingToolsStyled = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.fg};
  padding-bottom: 8px;
  display: flex;
  justify-content: center;
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

export const SeparatorStyled = styled.div`
  border-right: 1px solid ${(props) => props.theme.color.fg};
  height: 25px;
`;
