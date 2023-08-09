import { styled } from "styled-components";


export const Wrapper = styled.div`
    position: fixed;
    margin-left: ${props => props.theme.panelsSize.sideBarSize};
    margin-top: ${props => props.theme.panelsSize.headerSize};
    padding-left: 50px;
    width: 100%;
`
