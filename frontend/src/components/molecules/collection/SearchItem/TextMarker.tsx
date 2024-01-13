import React from "react";

import { MarkerStyled } from "./SearchItemStyled";

interface ITextMarkerProps {
  text: string;
  markerString: string;
}

export const TextMarker: React.FC<ITextMarkerProps> = ({
  markerString,
  text,
}) => {
  const textParts = text.split(markerString);
  return (
    <>
      {textParts.map((textParts, index) => (
        <React.Fragment key={index}>
          {textParts}
          {index !== textParts.length - 1 && (
            <MarkerStyled>{markerString}</MarkerStyled>
          )}
        </React.Fragment>
      ))}
    </>
  );
};
