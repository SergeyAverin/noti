import styled from "styled-components";

export const AccountManagerStyled = styled.div`
  position: relative;
`;

export const AccountManagerHeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  padding: 15px;
  border-radius: 15px;
  & > *:first-child,
  & > *:last-child {
    margin-left: -10px;
    margin-right: -10px;
  }
  &:hover {
    transition: 0.3s;
    background: ${(props) => props.theme.color.highlightFaded};
  }
`;

export const AccountManagerPanelStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  width: 100%;
  bottom: -130%;
`;

export const AccountManagerItemStyled = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  padding: 8px;
  padding: 10px;
  font-size: 18px;
  padding-left: 20px;
  background: ${(props) => props.theme.color.bg};
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.theme.color.primary};
    transition: 0.3s;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.fg};
  }
`;
