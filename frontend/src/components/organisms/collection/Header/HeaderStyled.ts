import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: ${(props) => props.theme.panelsSize.headerSize};
  margin-left: ${(props) => props.theme.panelsSize.sideBarSize};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-right: 100px;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.color.primary};
  svg {
    margin-left: 15px;
  }
`;
