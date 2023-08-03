import styled, { css } from "styled-components";

interface IMarginProps {
  harezontal?: boolean;
  vartekal?: boolean;
}

export const Center = styled.div<IMarginProps>`
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
    props.vartekal &&
    css`
      align-items: center;
    `}
`;

Center.defaultProps = {
  harezontal: true,
  vartekal: true,
};
