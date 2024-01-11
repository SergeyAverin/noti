import styled from "styled-components";

export const LabelStyled = styled.label`
  color: ${(props) => props.theme.color.fg};
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  font-size: ${(props) => props.theme.fontSizes.large};
  transition: all 0.2s ease;
  z-index: 1;
`;
