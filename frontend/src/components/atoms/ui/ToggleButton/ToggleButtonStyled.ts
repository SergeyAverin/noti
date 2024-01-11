import styled, { css } from "styled-components";

interface IToggleButtonStyledProps {
  isEnable: boolean;
}
export const ToggleButtonStyled = styled.div<IToggleButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.fg};
  user-select: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;

  ${(props) =>
    props.isEnable &&
    css`
      color: ${(props) => props.theme.color.highlight};
    `}
`;
