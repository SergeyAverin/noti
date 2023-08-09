import styled from "styled-components";

export const SideBarStyled = styled.div`
  background: ${(props) => props.theme.color.secondary};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.theme.panelsSize.sideBarSize};
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: auto;
`;
