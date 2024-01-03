import styled from "styled-components"


interface ICircleStyledProps {
  color: string
}
export const CircleStyled = styled.div<ICircleStyledProps>`
  width: 15px;
  height: 15px;
  border-radius: 30px;
  background: ${props => props.color};
`