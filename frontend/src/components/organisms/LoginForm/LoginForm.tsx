import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LoginFormStyled, ErrorsStyled } from "./loginFormStyled";
import { Margin, SubmitButton, ErrorText } from "@atoms/index";
import { InputLabelController } from "@molecules/InputLabel";

import { useLoginMutation } from "@redux/api/authApi";

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
  const [login, { isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      navigate('/')
    }
  })
  const onSubmit = (data: FormValues) => {
    login(data).then(() => {
      if (!isError) {
        navigate("/");
      }
    });
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
        <ErrorsStyled>
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <br />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          {isError && <ErrorText>Wrong login or password</ErrorText>}
        </ErrorsStyled>
      </Margin>
    </LoginFormStyled>
  );
};
