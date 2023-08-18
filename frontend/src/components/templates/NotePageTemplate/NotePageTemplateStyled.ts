import styled from "styled-components";

export const NoteStyled = styled.div`
  width: 1300px;
  margin-left: ${(props) => props.theme.panelsSize.sideBarSize};
  padding: 10px 130px;
  margin: auto;
  margin-top: ${(props) => props.theme.panelsSize.headerSize};
`;
