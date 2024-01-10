import styled from "styled-components";

export const PopupBackground = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const PopupContent = styled.div`
  padding: 50px;
  border-radius: 15px;
  background: ${(props) => props.theme.color.primary};
  z-index: 15;
  width: 800px;
  min-height: 800px;
`;
