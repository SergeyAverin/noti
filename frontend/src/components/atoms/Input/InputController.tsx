import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

import { InputStyled } from "./inputStyled";

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
        <InputStyled onChange={onChange} onBlur={onBlur} value={value} />
      )}
    />
  );
};
