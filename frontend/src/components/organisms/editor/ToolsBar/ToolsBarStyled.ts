import styled from "styled-components";

export const ToolsBarStyled = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.fg};
  padding-bottom: 4px;
  padding-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
