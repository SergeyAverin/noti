import React from "react";
import { useForm, Controller, Control, FieldValues } from "react-hook-form";

import { LoginFormStyled } from "./loginFormStyled";
import { Margin, SubmitButton } from "@atoms/index";
import { InputLabelController } from "@molecules/InputLabel";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log('data');
    console.log(data);
  };
  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputLabelController
        text="Email"
        control={control}
        name="email"
      />
      <Margin mt={15}>
        <InputLabelController
          text="Password"
          attrType="password"
          control={control}
          name="password"
        />
      </Margin>
      <Margin mt={15}>
        <SubmitButton value="login" />
      </Margin>
    </LoginFormStyled>
  );
};
