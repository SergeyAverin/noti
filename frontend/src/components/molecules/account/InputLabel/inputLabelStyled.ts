import styled from "styled-components";
import { InputStyled } from "@atoms/ui/Input/inputStyled";
import { LabelStyled } from "@atoms/index";

export const InputLabelWrapper = styled.div`
  background: ${(props) => props.theme.color.secondary};
  border-radius: 5px;
  padding: 15px;
  width: 360px;
  height: 32px;
  position: relative;
`;

export const InputLabelStyled = styled(InputStyled)`
  &:focus + ${LabelStyled}, &:valid + ${LabelStyled} {
    top: 15px;
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  &:focus + ${LabelStyled} {
    color: ${(props) => props.theme.color.highlight};
  }
  &:valid:not(:focus) + label {
    color: ${(props) => props.theme.color.fg};
  }
`;
