import React from "react";

import { CircleStyled } from "./CircleStyled";

export interface ICircleProps {
  /** This prop is circle background color */
  color: string;

  /** Circle width in px */
  width?: number;

  /** Circle height in px */
  height?: number;

  /** Circle border radius */
  borderRadius?: number;
}

/** This component is circle with color.
 * This component use in tools with color. */
export const Circle: React.FC<ICircleProps> = ({
  color,
  width,
  height,
  borderRadius,
}) => {
  return (
    <CircleStyled
      color={color}
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

Circle.defaultProps = {
  width: 15,
  height: 15,
  borderRadius: 30,
};
