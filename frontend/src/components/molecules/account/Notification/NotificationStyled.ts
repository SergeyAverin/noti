import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    
  }
  to {
    opacity: 0;
  }
`;
interface INotificationStyledProps {
  isFadeOutAnimation: boolean;
}
export const NotificationStyled = styled.div<INotificationStyledProps>`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.fg};
  border-radius: 15px;
  padding: 20px;
  position: relative;
  min-width: 350px;
  /*
  animation: 1s ${fadeIn} ease;
  ${(props) =>
    props.isFadeOutAnimation &&
    css`
      animation: 0.5s ${fadeOut} ease;
    `}
    transition: 1s;
    */
`;

export const NotificationTitleStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.headlineMedium};
`;

export const NotificationDescriptionStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 15px;
`;

export const NotificationCloseStyled = styled.div`
  right: 15px;
  top: 15px;
  position: absolute;
  cursor: pointer;
`;
