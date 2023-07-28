import React from "react";
import { useForm, Controller, Control, FieldValues } from "react-hook-form";

import { LoginFormStyled } from "./loginFormStyled";
import { Margin, SubmitButton, ErrorText } from "@atoms/index";
import { InputLabelController } from "@molecules/InputLabel";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log("data");
    console.log(data);
  };
  return (
    <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputLabelController
        text="Email"
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <Margin mt={15}>
        <InputLabelController
          text="Password"
          attrType="password"
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
        />
      </Margin>
      <Margin mt={15}>
        <SubmitButton value="login" />
      </Margin>
      <Margin mt={30}>
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        <br />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      </Margin>
    </LoginFormStyled>
  );
};
