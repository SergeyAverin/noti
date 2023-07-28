import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

import { InputLabel } from "./InputLabel";

type InputControllerProps = {
  control: Control<FieldValues>;
  name: string;
  rules?: Record<string, unknown>;
};

export 
const InputController: React.FC<InputControllerProps> = ({
  control,
  name,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputLabel labelText="f" attrName="text" onChange={onChange} onBlur={onBlur} value={value} />
      )}
    />
  );
};
/*
  attrName,
  labelText,
  attrType,
  inputValues,
  setInputValues,
*/