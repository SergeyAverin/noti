import styled from "styled-components";

export const AddCellStyled = styled.div``;

export const AddCellMenuStyled = styled.div`
  background: ${(props) => props.theme.color.primary};
  position: absolute;
  border-radius: 15px;
  padding: 15px;
  min-width: 300px;
  min-height: 400px;
  z-index: 1;
`;

export const ToolStyled = styled.div`
  border-top: 2px solid ${(props) => props.theme.color.highlight};
  border-bottom: 2px solid ${(props) => props.theme.color.highlight};
  padding: 8px;
  cursor: pointer;
`;
