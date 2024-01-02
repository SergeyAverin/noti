import React from "react";
import { Center, Flex } from "@atoms/index";
import { LoginForm } from "@organisms/LoginForm";

const AddAccountPage: React.FC = () => {
  return (
    <Center>
      <Flex justifyContent="flex-start" alignItems="center" flexDirection="column">
        <h2>Add account</h2>
        <LoginForm />
      </Flex>
    </Center>
  );
};

export default AddAccountPage;
