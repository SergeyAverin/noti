import { css, styled } from "styled-components";

interface IWidthProps {
    width: string,
    isMarginAuto?: boolean
}
export const Width = styled.div<IWidthProps>`
    width: ${props => props.width};
     ${props => props.isMarginAuto && css`
         margin: auto;
     `}
`
Width.defaultProps = {
    isMarginAuto: false
}