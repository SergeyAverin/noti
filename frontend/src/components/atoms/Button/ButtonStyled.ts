import styled, { css } from "styled-components";

interface IButtonStyledProps {
  fill?: boolean;
  danger?: boolean;
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  cursor: pointer;
  padding: 8px 37px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: none;
  color: ${(props) => props.theme.color.highlight};
  border: 2px solid ${(props) => props.theme.color.highlight};
  font-size: ${(props) => props.theme.fontSizes.medium};

  ${(props) =>
    props.fill &&
    css`
      background: ${(props) => props.theme.color.highlight};
      color: ${(props) => props.theme.color.bg};
    `}
  ${(props) =>
    props.danger &&
    css`
      border: 3px solid ${(props) => props.theme.color.dangerous};
      color: ${(props) => props.theme.color.dangerous};
    `}
    ${(props) =>
    props.danger &&
    props.fill &&
    css`
      border: 3px solid ${(props) => props.theme.color.dangerous};
      background: ${(props) => props.theme.color.dangerous};
      color: ${(props) => props.theme.color.bg};
    `}
`;
