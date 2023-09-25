export enum CellTypeEnum {
  STRING = "string",
  HEADING_LARGE = "heading_large",
  HEADING_MEDIUM = "heading_medium",
  HEADING_SMALL = "heading_small",
  CHECKBOX = "checkbox",
  LINE = "line",
  QUOTE = "quote",
}

export enum CellPropertyColor {
  GREY = "grey",
  BROWN = "brown",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple",
  PINK = "pink",
  RED = "red",
}
export enum CellStyleMode {
  BACKGROUND = "background",
  FONT_COLOR = "font_color",
}
export interface ICell {
  id: string;
  type: string;
  property: {
    styleMode?: CellStyleMode;
    color?: CellPropertyColor;
  };
  children: string;
}
