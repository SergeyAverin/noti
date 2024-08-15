import { Center, Flex } from "@atoms/index";
import React from "react";

interface IFormPageTemplatePresentationalProps {
  form: React.ReactNode;
  title?: string | undefined
}

export const FormPageTemplatePresentational: React.FC<
  IFormPageTemplatePresentationalProps
> = ({ form, title }) => {
  return (
    <Center>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        { title &&
          <h2>{title}</h2>
        }
        {form}
      </Flex>
    </Center>
  );
};
