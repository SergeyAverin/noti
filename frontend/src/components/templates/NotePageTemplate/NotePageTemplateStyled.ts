import styled from "styled-components";

export const NoteStyled = styled.div`
  padding-left: ${(props) => props.theme.panelsSize.sideBarSize};
  margin-top: 15px;
  width: 80%;
`;

export const NoteContentStyled = styled.div`
  outline: none;
`;

export const NoteWrapperStyled = styled.div`
  margin-left: ${(props) => props.theme.panelsSize.sideBarSize};
  margin-top: ${(props) => props.theme.panelsSize.headerSize};
`;
