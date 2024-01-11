import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

import { InputLabel } from "./InputLabel";

type InputLabelControllerProps = {
  control: Control<FieldValues> | any;
  name: string;
  text: string;
  attrType?: string;
  rules?: Record<string, unknown>;
};

export const InputLabelController: React.FC<InputLabelControllerProps> = ({
  control,
  name,
  text,
  attrType,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputLabel
          labelText={text}
          attrName={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          attrType={attrType}
        />
      )}
    />
  );
};
