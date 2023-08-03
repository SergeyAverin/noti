import React from "react";
import { Center } from "@atoms/index";
import { RegistrationForm } from "@organisms/RegistrationForm";
import { useForm } from "react-hook-form";

const RegistrationPage: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('data');
  };

  return (
    <Center>
      <RegistrationForm />
    </Center>
  );
};

export default RegistrationPage;
