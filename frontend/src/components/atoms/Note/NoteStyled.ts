import styled from "styled-components";

export const NoteStyled = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 20px;
    color: ${(props) => props.theme.color.fg};
  }
  svg {
    margin-right: 10px;
  }
`;

export const NoteLinkStyled = styled.div`
  display: flex;
  align-items: center;
`;
