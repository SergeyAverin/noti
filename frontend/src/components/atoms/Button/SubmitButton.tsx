import styled from 'styled-components';


export const SubmitButton = styled.input.attrs({type: 'submit'})`
    cursor: pointer;
    padding: 14px 37px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: ${props => props.theme.color.highlight};
    color: ${props => props.theme.color.bg};
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    line-height: 27px;
    width: 100%;
`
