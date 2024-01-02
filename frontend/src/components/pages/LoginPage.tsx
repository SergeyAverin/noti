import React from "react";
import { Flex, Center, Margin, Label } from "@atoms/index";
import { LoginForm } from "@organisms/LoginForm";
import { useRedirectAuthorized } from "@hooks/useRedirectAuthorized";

const LoginPage: React.FC = () => {
  useRedirectAuthorized();
  return (
    <Center>
      <LoginForm />
    </Center>
  );
};

export default LoginPage;
