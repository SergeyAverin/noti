import styled from "styled-components";

export const NoteStyled = styled.div`
  margin-left: ${(props) => props.theme.panelsSize.sideBarSize};
  margin-top: ${(props) => props.theme.panelsSize.headerSize};
  padding: 10px 130px;
`;
