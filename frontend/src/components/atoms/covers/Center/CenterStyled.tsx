import styled, { css } from "styled-components";

interface ICenterStyledProps {
  horizontal?: boolean;
  vertical?: boolean;
}

export const CenterStyled = styled.div<ICenterStyledProps>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.horizontal &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.vertical &&
    css`
      align-items: center;
    `}
`;
