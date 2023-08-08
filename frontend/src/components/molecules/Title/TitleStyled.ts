import styled from "styled-components";

export const TitleStyled = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const TitleLineStyled = styled.hr`
  border: 4px solid ${(props) => props.theme.color.highlight};
`;
