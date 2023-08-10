import styled from "styled-components";

export const TitleStyled = styled.div`
  height: 100%;
`;

export const TitleLineStyled = styled.hr`
  border: 4px solid ${(props) => props.theme.color.highlight};
`;

export const TitleInputStyled = styled.input`
  background: none;
  border: none;
  font-size: 48px;
  color: ${(props) => props.theme.color.fg};
  outline: 0;
  width: 100%;
  white-space: nowrap;
  overflow-y: auto;
  text-overflow: ellipsis;
`;
