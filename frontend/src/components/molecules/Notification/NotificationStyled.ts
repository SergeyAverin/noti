import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes` 
  from {
    opacity: 0;
    right: -50%;
  }
  to {
    opacity: 1;
    right: 0;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    right: 0;
    
  }
  to {
    opacity: 0;
    right: -50%;
  }
`;
interface INotificationStyledProps {
  fadeOutAnimation: boolean;
}
export const NotificationStyled = styled.div<INotificationStyledProps>`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.fg};
  border-radius: 15px;
  padding: 30px;
  position: relative;
  min-width: 550px;
  animation: 1s ${fadeIn} ease;
  ${(props) =>
    props.fadeOutAnimation &&
    css`
      animation: 0.5s ${fadeOut} ease;
    `}
  transition: 1s;
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
