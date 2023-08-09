import React from "react";
import { Flex, Center, Margin, Label } from "@atoms/index";
import { LoginForm } from "@organisms/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Center>
      <LoginForm />
    </Center>
  );
};

export default LoginPage;
