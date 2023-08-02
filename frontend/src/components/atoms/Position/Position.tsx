import styled from 'styled-components';


interface IPositionProps {
    position: string,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
}

export const Position = styled.div<IPositionProps>`
    position: ${props => props.position};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
`;

Position.defaultProps = {
    position: 'static',
};
