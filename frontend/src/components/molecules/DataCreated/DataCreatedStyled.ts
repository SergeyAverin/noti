import styled from "styled-components";

export const DataCreatedMoreStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.color.fg};
  background: ${(props) => props.theme.color.secondary};
  padding: 15px;
  border-radius: 15px;
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
  text-align: center;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
`;

export const DataCreatedStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.color.fg};
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 220px;
  &:hover ${DataCreatedMoreStyled} {
    opacity: 1;
    transition: 0.3s;
    top: 100%;
  }
`;
