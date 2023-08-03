import React from "react";
import { Flex, Center, Margin, Label } from "@atoms/index";
import { InputLabelController } from "@molecules/InputLabel";
import { LoginForm } from "@organisms/LoginForm";
import { useForm } from "react-hook-form";

const LoginPage: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('data');
  };

  return (
    <Center>
      <LoginForm />
    </Center>
  );
};

export default LoginPage;
