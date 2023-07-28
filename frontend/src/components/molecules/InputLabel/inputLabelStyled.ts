import styled from "styled-components";
import { InputStyled } from "@atoms/Input/inputStyled";
import { Label } from "@atoms/index";

export const InputLabelWrapper = styled.div`
  background: ${(props) => props.theme.color.secondary};
  border-radius: 5px;
  padding: 15px;
  width: 360px;
  height: 32px;
  position: relative;
`;

export const InputLabelStyled = styled(InputStyled)`
  &:focus + ${Label}, &:valid + ${Label} {
    top: 15px;
    font-size: 16px;
  }
  &:focus + ${Label} {
    color: ${(props) => props.theme.color.highlight};
  }
  &:valid:not(:focus) + label {
    color: ${(props) => props.theme.color.fg};
  }
`;
