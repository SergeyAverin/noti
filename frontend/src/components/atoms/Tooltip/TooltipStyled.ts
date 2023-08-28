import styled, { css } from "styled-components";

import { TooltipPlacement } from "./TooltipPlacement";

interface ITooltipStyledProps {
  placement: TooltipPlacement;
}
export const TooltipStyled = styled.div<ITooltipStyledProps>`
  font-size: 18px;
  color: ${(props) => props.theme.color.fg};
  background: ${(props) => props.theme.color.secondary};
  padding: 15px;
  border-radius: 15px;
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  bottom: 0;
  z-index: -1;
  height: 100%;
  width: 180px;
  text-align: center;

  // Bottom
  ${(props) =>
    props.placement == TooltipPlacement.BOTTOM &&
    css`
      top: 0;
      left: 50%;
    `}
  ${(props) =>
    props.placement == TooltipPlacement.BOTTOM_START &&
    css`
      top: 0;
      left: 0;
    `}
      ${(props) =>
    props.placement == TooltipPlacement.BOTTOM_END &&
    css`
      top: 0;
      left: 100%;
    `}

  // Left
    ${(props) =>
    props.placement == TooltipPlacement.LEFT &&
    css`
      left: 0;
      top: 50%;
    `}
    ${(props) =>
    props.placement == TooltipPlacement.LEFT_START &&
    css`
      left: 0;
      top: 0;
    `}
      ${(props) =>
    props.placement == TooltipPlacement.LEFT_END &&
    css`
      left: 0;
      top: 100%;
    `}
`;

interface ITooltipWrapperStyledProps {
  placement: TooltipPlacement;
}
export const TooltipWrapperStyled = styled.div<ITooltipWrapperStyledProps>`
  font-size: 18px;
  color: ${(props) => props.theme.color.fg};
  position: relative;
  display: flex;
  z-index: 5;
  &:hover ${TooltipStyled} {
    opacity: 1;
    transition: 0.3s;
    justify-content: flex-end;

    // Bottim
    ${(props) =>
      props.placement == TooltipPlacement.BOTTOM &&
      css`
        top: 100%;
        left: 50%;
      `}
    ${(props) =>
      props.placement == TooltipPlacement.BOTTOM_START &&
      css`
        top: 100%;
        left: 0;
      `}
      ${(props) =>
      props.placement == TooltipPlacement.BOTTOM_END &&
      css`
        top: 100%;
        left: 100%;
      `}

      // Left
      ${(props) =>
      props.placement == TooltipPlacement.LEFT &&
      css`
        left: 100%;
        top: 50%;
      `}
    ${(props) =>
      props.placement == TooltipPlacement.LEFT_START &&
      css`
        left: 100%;
        top: 0;
      `}
      ${(props) =>
      props.placement == TooltipPlacement.LEFT_END &&
      css`
        left: 100%;
        top: 100%;
      `}

    // Right
    ${(props) =>
      props.placement == TooltipPlacement.RIGHT &&
      css`
        right: 100%;
        bottom: 0%;
      `}
    ${(props) =>
      props.placement == TooltipPlacement.RIGHT_START &&
      css`
        right: 100%;
        bottom: 0;
      `}
      ${(props) =>
      props.placement == TooltipPlacement.RIGHT_END &&
      css`
        right: 100%;
        bottom: 100%;
      `}
  }
`;
