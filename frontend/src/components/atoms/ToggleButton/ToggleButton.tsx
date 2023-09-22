import React, { useState, useEffect } from "react";

import { ToggleButtonStyled } from "./ToggleButtonStyled";

interface IToggleButtonProps {
  iconEnable: any;
  iconDisable: any;
  isEnable: boolean;
  onEnable: Function;
  onDisable: Function;
  text?: string;
}

export const ToggleButton: React.FC<IToggleButtonProps> = ({
  text,
  iconEnable,
  iconDisable,
  isEnable,
  onEnable, 
  onDisable
}) => {
  const [isEnableState, setIsEnableState] = useState(isEnable);
  const clickHeandler = () => {
    setIsEnableState(prev => !prev)
    isEnableState == true ? onDisable() : onEnable();
  }
  useEffect(()=> {
    setIsEnableState(isEnable)
  }, [isEnable])

  return (
    <ToggleButtonStyled isEnable={isEnableState} onClick={clickHeandler}>
      {isEnableState ? iconEnable : iconDisable}
      {text}
    </ToggleButtonStyled>
  );
};
