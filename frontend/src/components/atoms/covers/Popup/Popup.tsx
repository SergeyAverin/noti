import React, { useRef } from "react";
import { PopupBackground, PopupContent } from "./PopupStyled";
import { Position } from "../Position/Position";

export interface IPopupProps {
  children: React.ReactNode;
  closeFunction?: Function;
}

export const Popup: React.FC<IPopupProps> = ({ children, closeFunction }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const onBackgroundClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (closeFunction && popupRef.current == (event.target as Node)) {
      closeFunction();
    }
  };
  return (
    <Position position="absolute">
      <PopupBackground onClick={onBackgroundClick} ref={popupRef}>
        <PopupContent>{children}</PopupContent>
      </PopupBackground>
    </Position>
  );
};
