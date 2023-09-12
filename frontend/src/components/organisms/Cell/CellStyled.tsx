import styled, { css } from "styled-components";

interface ICellStyledProps {
    isActive: boolean
}
export const CellStyled = styled.div<ICellStyledProps>`
    padding: 15px;
    ${props => props.isActive && css`
        border: 2px solid red;
    `}
`
