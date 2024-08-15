import styled from "styled-components";

export interface IMarginStyledProps {
  mt?: Number;
  ml?: Number;
  mr?: Number;
  mb?: Number;
}

export const MarginStyled = styled.div<IMarginStyledProps>`
  margin-top: ${(props) => props.mt + "px"};
  margin-right: ${(props) => props.mr + "px"};
  margin-left: ${(props) => props.ml + "px"};
  margin-bottom: ${(props) => props.mb + "px"};
`;
