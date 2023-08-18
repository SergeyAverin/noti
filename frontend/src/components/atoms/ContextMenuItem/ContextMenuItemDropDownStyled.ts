import styled from "styled-components";

export const ContextMenuItemDropDownList = styled.div`
  position: absolute;
  left: 100%;
  background: ${(props) => props.theme.color.primary};
  padding: 10px;
  border-radius: 14px;
  width: 250px;
  bottom: -150px;
`;
