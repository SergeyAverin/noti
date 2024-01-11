import { styled } from "styled-components";

export const ShareButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.fg};
  user-select: none;
  font-size: 18px;
  cursor: pointer;
`;

export const SelectPermission = styled.select`
  background: ${(props) => props.theme.color.primary};
  border: 4px solid ${(props) => props.theme.color.highlight};
  color: ${(props) => props.theme.color.highlight};
  border-radius: 8px;
  padding: 8px 15px;
  outline: none;
  width: 300px;
`;

export const CopyButtonStyled = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  padding-right: 35px;

  img {
    margin-left: 10px;
  }
  &:hover {
    background: ${(props) => props.theme.color.highlightFaded};
    transition: 0.3s;
  }
`;
