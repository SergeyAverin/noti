import styled from "styled-components";

export const SearchItemStyled = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: ${(props) => props.theme.color.highlightFaded};
  }
  color: ${(props) => props.theme.color.fg};
`;

export const BreadcrumbsStyled = styled.div`
  font-size: 14px;
  margin-top: 15px;
`;

export const ContentStyled = styled.div`
  font-size: 16px;
  margin-top: 15px;
  line-height: 2;
`;

export const SeparatorStyled = styled.hr`
  color: 1px solid ${(props) => props.theme.color.fg};
`;

export const SearchItemTitleStyled = styled.div`
  svg {
    margin-right: 10px;
  }
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MarkerStyled = styled.span`
  padding: 8px;
  background: ${(props) => props.theme.color.highlightFaded};
`;
