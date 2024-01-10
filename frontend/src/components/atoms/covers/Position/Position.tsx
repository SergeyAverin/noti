import styled from 'styled-components';


interface IPositionProps {
    position: string,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
    zIndex?: number,
}

export const Position = styled.div<IPositionProps>`
    position: ${props => props.position};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
`;

Position.defaultProps = {
    position: 'static',
};
