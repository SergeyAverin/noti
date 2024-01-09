import styled from "styled-components";

export const ErrorTextStyled = styled.span`
  color: ${(props) => props.theme.color.dangerous};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
