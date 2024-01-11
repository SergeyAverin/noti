import React, { useRef, useState } from "react";

import { InputLabelWrapper, InputLabelStyled } from "./inputLabelStyled";
import { Label } from "@atoms/index";


interface IInputProps {
  attrName: string;
  attrType?: string;
  labelText: string;
  value: string;
  onBlur: (...event: any[]) => void,
  onChange: (...event: any[]) => void;
}

export const InputLabel: React.FC<IInputProps> = ({
  attrName,
  labelText,
  attrType,
  value,
  onBlur,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const fucusOnInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <InputLabelWrapper>
      <InputLabelStyled
        ref={inputRef}
        name={attrName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={attrType}
      />
      <Label htmlFor={attrName} onClick={fucusOnInput}>
        {labelText}
      </Label>
    </InputLabelWrapper>
  );
};

InputLabel.defaultProps = {
  attrType: "text",
};
