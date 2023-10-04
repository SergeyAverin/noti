import styled from "styled-components";

interface IDroppableCellStyledProps {
  isOver: boolean;
}
export const DroppableCellStyled = styled.div<IDroppableCellStyledProps>`
  height: 5px;
  opacity: ${(props) => (props.isOver ? 1 : 0)};
  transition: 0.3s;
  background: ${(props) => props.theme.color.highlight};
`;
