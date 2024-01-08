import styled, { css } from "styled-components";

export interface ICenterProps {
  horizontal?: boolean;
  vertical?: boolean;
}

export const Center = styled.div<ICenterProps>`
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

Center.defaultProps = {
  horizontal: true,
  vertical: true,
};
