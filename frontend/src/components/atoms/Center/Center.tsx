import styled, { css } from "styled-components";

interface IMarginProps {
  harezontal?: boolean;
  vartekal?: boolean;
}

export const Center = styled.div<IMarginProps>`
  display: flex;
  position: absolute;

  ${(props) =>
    props.harezontal &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${(props) =>
    props.vartekal &&
    css`
      top: 50%;
      transform: translateY(-50%);
    `}
`;

Center.defaultProps = {
  harezontal: true,
  vartekal: true,
};
