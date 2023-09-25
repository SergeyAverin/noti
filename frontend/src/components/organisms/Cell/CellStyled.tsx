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

export const HeadingLarge = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.headlineLarge};
`
export const HeadingMedium = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.headlineMedium};
`
export const HeadingSmall = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.headlineSmall};
`
export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    color:  red;
`
export const Line = styled.hr`
    border: 2px solid ${props => props.theme.color.highlight};
`
export const Quote = styled.q`
    border-left: 2px solid ${props => props.theme.color.highlight};
    padding-left: 15px;
`
