import { css, styled } from "styled-components";

export interface IWidthStyledProps {
  width: string;
  isMarginAuto?: boolean;
}
export const WidthStyled = styled.div<IWidthStyledProps>`
  width: ${(props) => props.width};
  ${(props) =>
    props.isMarginAuto &&
    css`
      margin: auto;
    `}
`;
