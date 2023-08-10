import styled from "styled-components";

export const CreateNoteStyled = styled.div`
  color: ${(props) => props.theme.color.fg};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
