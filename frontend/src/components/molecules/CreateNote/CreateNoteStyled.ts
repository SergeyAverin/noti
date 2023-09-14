import styled from "styled-components";

export const CreateNoteStyled = styled.div`
  color: ${(props) => props.theme.color.fg};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.theme.color.highlightFaded};
    transition: 0.3s;
  }
`;
