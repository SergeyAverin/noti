import { styled } from "styled-components";

interface IWidthProps {
    width: string
}
export const Width = styled.div<IWidthProps>`
    width: ${props => props.width};
`
