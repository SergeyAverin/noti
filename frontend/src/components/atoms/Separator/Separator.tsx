import styled from "styled-components";

export const Separator = styled.div`
  border-right: 1px solid ${(props) => props.theme.color.fg};
  height: 25px;
  margin-left: 15px;
  margin-right: 15px;
`;
