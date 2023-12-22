import styled from "styled-components";

export const ToolButtonDropDownItem = styled.div`
  background: ${(props) => props.theme.color.secondary};
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.color.fg};
  cursor: pointer;
  transition: 0.3s;
  min-width: 100px;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => props.theme.color.primary};
    transition: 0.3s;
  }
`;
