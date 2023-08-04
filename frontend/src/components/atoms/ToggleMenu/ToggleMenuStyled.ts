import styled from "styled-components";

export const ToggleMenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  svg {
    transition: 0.3s;
  }
`;
export const ToggleMenuTextStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 15px;

  svg {
    margin-right: 15px;
  }
`;

export const ToggleMenuWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
