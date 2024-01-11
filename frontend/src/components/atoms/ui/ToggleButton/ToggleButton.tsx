import React, { useState, useEffect } from "react";

import { ToggleButtonStyled } from "./ToggleButtonStyled";

export interface IToggleButtonProps {
  /** This icon show when button is enable */
  iconEnable: any;

  /** This icon show when button is disable */
  iconDisable: any;

  /** Enable state */
  isEnable: boolean;

  /** Callback function to be triggered when the button is enable */
  onEnable: Function;

  /** Callback function to be triggered when the button is disable */
  onDisable: Function;

  /** Button's text */
  text?: string;
}

/** This component is button to which you can turn enable and disable
 * by calling functions onEnable and onDisable */
export const ToggleButton: React.FC<IToggleButtonProps> = ({
  text,
  iconEnable,
  iconDisable,
  isEnable,
  onEnable,
  onDisable,
}) => {
  const [isEnableState, setIsEnableState] = useState(isEnable);
  const onClick = () => {
    setIsEnableState((prev) => !prev);
    isEnableState == true ? onDisable() : onEnable();
  };
  useEffect(() => {
    setIsEnableState(isEnable);
  }, [isEnable]);

  return (
    <ToggleButtonStyled isEnable={isEnableState} onClick={onClick}>
      {isEnableState ? iconEnable : iconDisable}
      {text}
    </ToggleButtonStyled>
  );
};
