import { styled } from "styled-components";

export const TrashMessageStyled = styled.div`
  position: fixed;
  background: ${(props) => props.theme.color.dangerous};
  color: ${(props) => props.theme.color.fg};
  font-size: 18px;
  bottom: 0;
  left: ${(props) => props.theme.panelsSize.sideBarSize};
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  padding-right: 350px;
`;
