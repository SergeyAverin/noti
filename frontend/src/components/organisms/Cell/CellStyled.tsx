import styled, { css } from "styled-components";


const DEBUG: boolean = process.env.DEBUG == 'true';
interface ICellStyledProps {
    isActive: boolean
}

export const CellStyled = styled.div<ICellStyledProps>`
    padding: 8px;
    ${props => props.isActive && DEBUG == true && css`
        border: 2px solid red;
    `}
`
