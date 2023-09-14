import styled from "styled-components";

export const DropDownMenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  padding: 15px;
  svg {
    transition: 0.3s;
  }
  &:hover {
    transition: 0.3s;
    background: ${(props) => props.theme.color.highlightFaded};
    border-radius: 15px;
  }
`;
export const DropDownMenuTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  svg {
    margin-right: 15px;
  }
`;

export const DropDownMenuWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
