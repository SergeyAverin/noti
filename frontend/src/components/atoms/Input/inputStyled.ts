import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  height: 20px;
  line-height: 20px;
  margin-top: 12px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: ${(props) => props.theme.color.fg};
  z-index: 5;
`;
