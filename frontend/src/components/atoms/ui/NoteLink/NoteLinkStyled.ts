import styled, { css } from "styled-components";

interface INoteLinkStyledProps {
  haveBackground?: boolean;
}
export const NoteLinkStyled = styled.div<INoteLinkStyledProps>`
  display: flex;
  align-items: center;
  transition: 0.3s;

  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.color.fg};
  padding: 8px;
  border-radius: 5px;

  svg {
    margin-right: 10px;
  }
  ${(props) =>
    props.haveBackground &&
    css`
      &:hover {
        background: ${(props) => props.theme.color.highlightFaded};
        transition: 0.3s;
      }
    `}
`;

export const NoteLinkWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;
