import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useRedirectAuthorized } from "@hooks/useRedirectAuthorized";
import { Margin, SubmitButton, ErrorText, Form, Position } from "@atoms/index";
import { InputLabelController } from "@molecules/InputLabel";


type FormValues = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  useRedirectAuthorized();
  const onSubmit = (data: FormValues) => {
    
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    <InputLabelController
        text="Username"
        control={control}
        name="username"
        rules={{
          required: "Username is required",
        }}
      />
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
          attrType="password1"
          control={control}
          name="password1"
          rules={{ required: "Password1 is required" }}
        />
      </Margin>
      <Margin mt={15}>
        <InputLabelController
          text="Password2"
          attrType="password2"
          control={control}
          name="password2"
          rules={{ required: "Password2 is required" }}
        />
      </Margin>
      <Margin mt={15}>
        <SubmitButton value="login" />
      </Margin>
      <Margin mt={30}>
        <Position position="absolute">
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <br />
          {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
          <br />
          {errors.password1 && <ErrorText>{errors.password1.message}</ErrorText>}
          <br />
          {errors.password2 && <ErrorText>{errors.password2.message}</ErrorText>}
        </Position>
      </Margin>
    </Form>
  );
};
