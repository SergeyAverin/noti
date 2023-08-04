import styled from "styled-components";

export const SideBarStyled = styled.div`
  background: ${(props) => props.theme.color.secondary};
  position: absolute;
  left: 0;
  height: 100%;
  width: 300px;
  box-sizing: border-box;
  padding: 30px 50px;
`;
