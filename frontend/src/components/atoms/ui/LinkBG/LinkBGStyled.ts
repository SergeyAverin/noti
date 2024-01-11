import styled from "styled-components";

export const LinkBGStyled = styled.div`
  a {
    color: ${(props) => props.theme.color.highlight};
    text-decoration: none;
    padding: 15px;
    border-radius: 14px;
    transition: 0.2s;
    font-size: ${(props) => props.theme.fontSizes.large};
    &:hover {
      background: ${(props) => props.theme.color.highlightFaded};
      transition: 0.2s;
    }
  }
`;
