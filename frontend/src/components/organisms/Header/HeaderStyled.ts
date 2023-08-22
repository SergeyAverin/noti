import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: ${(props) => props.theme.panelsSize.headerSize};
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  padding-left: ${(props) => props.theme.panelsSize.sideBarSize};
  padding: 40px;
  padding-right: 100px;
  background-color: ${(props) => props.theme.color.primary};
  svg {
    margin-left: 15px;
  }
`;
