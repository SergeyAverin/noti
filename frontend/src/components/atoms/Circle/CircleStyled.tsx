import styled from "styled-components";

interface ICircleStyledProps {
  color: string;
  width?: number;
  height?: number;
  borderRadius?: number;
}

export const CircleStyled = styled.div<ICircleStyledProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => `${props.borderRadius}px`};
  background: ${(props) => props.color};
`;
