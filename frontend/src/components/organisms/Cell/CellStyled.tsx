import { CellPropertyColor, CellStyleMode } from "@redux/types/cell";
import styled from "styled-components";
import { css } from "styled-components";

export const CellTools = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  right: 100%;
  opacity: 0;
  transition: 0.4s;
`;

export const CellWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &:hover ${CellTools} {
    opacity: 1;
  }
`;

export const CellStyled = styled.div`
  padding: 8px;
  width: 100%;
`;
interface IbgMixinProps {
  color?: CellPropertyColor;
  styleMode?: CellStyleMode;
}

const bgMixin = (props: IbgMixinProps) => css`
  color: black;
  ${props.color == CellPropertyColor.RED &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.red};
  `}
  ${props.color == CellPropertyColor.BLUE &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.blue};
  `}
        ${props.color == CellPropertyColor.BROWN &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.brown};
  `}
        ${props.color == CellPropertyColor.GREY &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.grey};
  `}
        ${props.color == CellPropertyColor.ORANGE &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.orange};
  `}
        ${props.color == CellPropertyColor.PINK &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.pink};
  `}
        ${props.color == CellPropertyColor.PURPLE &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.purple};
  `}
        ${props.color == CellPropertyColor.YELLOW &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.yellow};
  `}
        ${props.color == CellPropertyColor.GREEN &&
  css`
    background: ${(props) => props.theme.propertyColor.bg.green};
  `}
`;

const fgMixin = (props: IbgMixinProps) => css`
  ${props.color == CellPropertyColor.RED &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.red};
  `}
  ${props.color == CellPropertyColor.BLUE &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.blue};
  `}
        ${props.color == CellPropertyColor.BROWN &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.brown};
  `}
        ${props.color == CellPropertyColor.GREY &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.grey};
  `}
        ${props.color == CellPropertyColor.ORANGE &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.orange};
  `}
        ${props.color == CellPropertyColor.PINK &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.pink};
  `}
        ${props.color == CellPropertyColor.PURPLE &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.purple};
  `}
        ${props.color == CellPropertyColor.YELLOW &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.yellow};
  `}
        ${props.color == CellPropertyColor.GREEN &&
  css`
    color: ${(props) => props.theme.propertyColor.fg.green};
  `}
`;


export const CellStringStyled = styled.div<IbgMixinProps>`
  ${(props) => props.styleMode == CellStyleMode.BACKGROUND && bgMixin(props)}
  ${(props) => props.styleMode == CellStyleMode.FONT_COLOR && fgMixin(props)}

  font-size: ${(props) => props.theme.fontSizes.small};
  outline: none;
  &::placeholder {
    color: red;
  }
  &::selection {
    background-color: ${(props) => props.theme.color.highlightFaded};
    width: 50px;
  }
`;
export const HeadingLarge = styled.h1<IbgMixinProps>`
  ${(props) => props.styleMode == CellStyleMode.BACKGROUND && bgMixin(props)}
  ${(props) => props.styleMode == CellStyleMode.FONT_COLOR && fgMixin(props)}
  font-size: ${(props) => props.theme.fontSizes.headlineLarge};
`;
export const HeadingMedium = styled.h2<IbgMixinProps>`
  ${(props) => props.styleMode == CellStyleMode.BACKGROUND && bgMixin(props)}
  ${(props) => props.styleMode == CellStyleMode.FONT_COLOR && fgMixin(props)}
  font-size: ${(props) => props.theme.fontSizes.headlineMedium};
`;
export const HeadingSmall = styled.h3<IbgMixinProps>`
  ${(props) => props.styleMode == CellStyleMode.BACKGROUND && bgMixin(props)}
  ${(props) => props.styleMode == CellStyleMode.FONT_COLOR && fgMixin(props)}
  font-size: ${(props) => props.theme.fontSizes.headlineSmall};
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })<IbgMixinProps>`
  ${(props) => props.styleMode == CellStyleMode.BACKGROUND && bgMixin(props)}
  ${(props) => props.styleMode == CellStyleMode.FONT_COLOR && fgMixin(props)}
  color:  red;
`;
export const Line = styled.hr<IbgMixinProps>`
  border: 2px solid ${(props) => props.theme.color.highlight};
`;
export const Quote = styled.q<IbgMixinProps>`
  ${(props) => props.styleMode == CellStyleMode.BACKGROUND && bgMixin(props)}
  ${(props) => props.styleMode == CellStyleMode.FONT_COLOR && fgMixin(props)}
  border-left: 2px solid ${(props) => props.theme.color.highlight};
  padding-left: 15px;
`;
