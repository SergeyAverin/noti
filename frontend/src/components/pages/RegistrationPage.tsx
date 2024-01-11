import React from "react";
import { Center } from "@atoms/index";
import { RegistrationForm } from "@organisms/account/RegistrationForm";

const RegistrationPage: React.FC = () => {
  return (
    <Center>
      <RegistrationForm />
    </Center>
  );
};

export default RegistrationPage;
