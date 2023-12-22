import styled, { css } from "styled-components";

interface ICenterProps {
  harezontal?: boolean;
  vertical?: boolean;
}

export const Center = styled.div<ICenterProps>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  
  ${(props) =>
    props.harezontal &&
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
  harezontal: true,
  vertical: true,
};
