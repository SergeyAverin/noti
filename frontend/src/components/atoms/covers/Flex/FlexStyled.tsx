import styled from "styled-components";

export interface IFlexStyledProps {
  justifyContent: string;
  alignItems: string;
  flexDirection?: string;
}

export const FlexStyled = styled.div<IFlexStyledProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;
  height: 100%;
`;
