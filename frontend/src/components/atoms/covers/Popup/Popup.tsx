import React, { useRef } from "react";
import { PopupBackground, PopupContent } from "./PopupStyled";
import { Position } from "../Position/Position";

export interface IPopupProps extends React.PropsWithChildren {
  /** This function called on close popup */
  onClose?: Function;
}

/** Popup component. This component wraps the content in a popup. */
export const Popup: React.FC<IPopupProps> = ({ children, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const onBackgroundClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onClose && popupRef.current == (event.target as Node)) {
      onClose();
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
