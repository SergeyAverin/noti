import styled from "styled-components";


export const CellTools = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    right: 100%;
    opacity: 0;
    transition: .4s;
`;

export const CellWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    &:hover ${CellTools} {
        opacity: 1;
    }
`

export const CellStyled = styled.div`
    padding: 8px;
    width: 100%;
`
