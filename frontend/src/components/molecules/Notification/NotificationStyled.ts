import styled from "styled-components";

export const NotificationStyled = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.fg};
  border-radius: 15px;
  padding: 30px;
  position: relative;
  min-width: 550px;
`;

export const NotificationTitleStyled = styled.div`
  font-size: 28px;
`;

export const NotificationDescriptionStyled = styled.div`
  font-size: 18px;
  margin-top: 15px;
`;

export const NotificationCloseStyled = styled.div`
  right: 15px;
  top: 15px;
  position: absolute;
  cursor: pointer;
`;
