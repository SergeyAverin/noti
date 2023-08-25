import styled from "styled-components";

export const AccountManagerStyled = styled.div`
  position: relative;
`;

export const AccountManagerHeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  padding: 15px;

  & > *:first-child,
  & > *:last-child {
    margin-left: -10px;
    margin-right: -10px;
  }
  &:hover {
    transition: 0.3s;
    background: ${(props) => props.theme.color.highlightFaded};
    border-radius: 15px;
  }
`;

export const AccountManagerPanelStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: -130%;
`;

export const AccountManagerItemStyled = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  padding: 8px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.fg};
  }
`;
