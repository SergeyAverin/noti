import styled, { css } from "styled-components";

export const CellContentStyled = styled.div`
  display: block;
`;

export const CellToolsStyled = styled.div`
  position: absolute;
  left: -5%;
  opacity: 0;
  transition: 0.2s;
  display: flex;
`;

interface ICellStyledProps {
  isSelected: boolean;
}
export const CellStyled = styled.div<ICellStyledProps>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${(props) =>
    props.isSelected &&
    process.env.DEBUG &&
    css`
      border: 2px solid red;
    `}
`;

export const EditCellPropertyProppertyStyled = styled.div`
  &:hover > ${CellToolsStyled} {
    opacity: 1;
  }
`;

interface ICellStringStyledProps {
  color?: string;
  bgColor?: string;
}
export const CellStringStyled = styled.input<ICellStringStyledProps>`
  font-size: 18px;
  background: none;
  border: none;
  color: ${(props) => (props.color ? props.color : props.theme.color.fg)};
  background: ${(props) => props.bgColor};
  outline: 0;
  width: 100%;
  white-space: nowrap;
  overflow-y: auto;
  text-overflow: ellipsis;
`;

interface ICellCheckboxStyledProps {
  color?: string;
  bgColor?: string;
}
export const CellCheckboxStyled = styled.input.attrs<ICellCheckboxStyledProps>({
  type: "checkbox",
})`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : props.theme.color.fg)};
  background: ${(props) => props.bgColor};
  background: none;
  border: none;
  color: ${(props) => props.theme.color.fg};
  outline: 0;
  margin-right: 14px;
  display: block;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const CellCheckboxWrapperStyled = styled.div`
  display: flex;
`;

interface ICellLineStyled {
  color?: string;
}
export const CellLineStyled = styled.hr`
  color: ${(props) => (props.color ? props.color : props.theme.color.fg)};
`;

interface ICellHeadingStyledProps {
  variant?: string;
  color?: string;
  bgColor?: string;
}
export const CellHeadingStyled = styled.input<ICellHeadingStyledProps>`
  ${(props) =>
    props.variant == "big" &&
    css`
      font-size: 48px;
    `}
  ${(props) =>
    props.variant == "medium" &&
    css`
      font-size: 40px;
    `}
    ${(props) =>
    props.variant == "small" &&
    css`
      font-size: 30px;
    `}
  background: none;
  border: none;
  outline: 0;
  margin-right: 14px;
  width: 100%;
  color: ${(props) => (props.color ? props.color : props.theme.color.fg)};
  background: ${(props) => props.bgColor};
`;

interface ICellListStyledProps {
  color?: string;
  bgColor?: string;
}
export const CellListStyled = styled.input<ICellListStyledProps>`
  font-size: 18px;
  background: none;
  border: none;
  color: ${(props) => (props.color ? props.color : props.theme.color.fg)};
  background: ${(props) => props.bgColor};
  outline: 0;
  width: 100%;
  white-space: nowrap;
  overflow-y: auto;
  text-overflow: ellipsis;
`;
