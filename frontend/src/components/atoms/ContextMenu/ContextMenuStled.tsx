import styled from "styled-components";

export const ContextMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  position: absolute;
  left: 100%;
  z-index: 100;
  min-width: 240px;
  top: 0;
`;

export const MenuListStyled = styled.ul`
  margin: 0;
  display: block;
  width: 100%;
  padding: 8px;
  &:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.color.fg};
    border-right: 5px;
  }
`;

export const SubMenuListStyled = styled.ul`
  margin: 0;
  display: block;
  width: 100%;
  padding: 8px;
  &:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.color.fg};
    border-right: 5px;
  }
  display: none;
  padding: 8px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(#404040, 0.15);
  position: absolute;
  left: 100%;
  right: 0;
  z-index: 100;
  width: 100%;
  top: 0;
  flex-direction: column;
  &:hover {
    display: flex;
  }
`;

export const MenuItemStyled = styled.li`
  position: relative;
  list-style: none;
  padding: 8px 8px;
  width: 100%;
  border-radius: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.highlightFaded};
        ${SubMenuListStyled} {
        display: flex;
        }
  }
`;

export const OpenContextMenuButtonStyled = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 8px;
  transition: .2s;
  &:hover {
    background-color: ${props => props.theme.color.highlightFaded};
      transition: .2s;
  }
  cursor: pointer;
`;
