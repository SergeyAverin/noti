import styled from "styled-components";

export const AccountManagerStyled = styled.div`
  position: relative;
`;

export const AccountManagerHeaderStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export const AccountManagerPanelStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 200px;
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
