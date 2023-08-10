import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: ${(props) => props.theme.panelsSize.headerSize};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding-left: ${(props) => props.theme.panelsSize.sideBarSize};
  padding-right: 100px;
  padding-top: 40px;
  z-index: -1;
  svg {
    margin-left: 15px;
  }
`;
