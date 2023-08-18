import { styled } from "styled-components";


export const ContextMenuItem = styled.div`
    border-top: 2px solid ${(props) => props.theme.color.highlight};
    border-bottom: 2px solid ${(props) => props.theme.color.highlight};
    padding: 18px;
    cursor: pointer;
    position: relative;
`
