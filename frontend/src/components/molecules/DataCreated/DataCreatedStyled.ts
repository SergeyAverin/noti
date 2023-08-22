import styled from "styled-components";

export const DataCreatedMoreStyled = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.color.fg};
  background: ${(props) => props.theme.color.secondary};
  padding: 15px;
  border-radius: 15px;
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  width: 250px;
  top: 0;
  z-index: -1;
`;

export const DataCreatedStyled = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.color.fg};
  position: relative;
  z-index: 5;
  &:hover ${DataCreatedMoreStyled} {
    opacity: 1;
    transition: 0.3s;
    top: 100%;
  }
`;
