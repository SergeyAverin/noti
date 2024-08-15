import styled from "styled-components";

export const SearchInputWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.fg};
  padding-bottom: 15px;
`;

export const SearchInputStyled = styled.input`
  border: none;
  background: none;
  outline: none;
  margin-left: 15px;
  color: ${(props) => props.theme.color.fg};
`;
