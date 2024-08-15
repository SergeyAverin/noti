import styled, { css } from "styled-components";

interface ISeparatorStyledProps {
  isHorizontal?: boolean;
}

export const SeparatorStyled = styled.div<ISeparatorStyledProps>`
  ${(props) =>
    props.isHorizontal
      ? css`
          border-bottom: 1px solid ${(props) => props.theme.color.fg};
          margin-top: 0;
          margin-left: 0;
        `
      : css`
          border-right: 1px solid ${(props) => props.theme.color.fg};
          height: 25px;
          margin-left: 15px;
          margin-right: 15px;
        `}
`;
