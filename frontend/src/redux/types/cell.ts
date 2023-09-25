export enum CellTypeEnum {
  STRING = "string",
  HEADING_1 = "heading1",
  HEADING_2 = "heading2",
  HEADING_3 = "heading3",
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
