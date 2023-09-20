import styled from "styled-components";

export const NoteStyled = styled.div`
  padding-left: ${(props) => props.theme.panelsSize.sideBarSize};
  padding-top: ${(props) => props.theme.panelsSize.headerSize};
  margin: auto;
`;

export const NoteContentStyled = styled.div`
  outline: none;
`;
