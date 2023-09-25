export enum CellTypeEnum {
  STRING = "string",
  HEADING_LARGE = "heading_large",
  HEADING_MEDIUM = "heading_medium",
  HEADING_SMALL = "heading_small",
  CHECKBOX = "checkbox",
  LINE = "line",
  QUOTE = "quote",
}

export interface ICell {
  id: string;
  type: string;
  property: object;
  children: string;
}
