import React from "react";
import { TFunction } from "i18next";

import { Center, Flex } from "@atoms/index";
import { LoginForm } from "@organisms/account/LoginForm";
import FormPageTemplate from "@templates/FormPageTemplate";

interface IAddAccountPagePresentationalProps {
  t: TFunction;
}

export const AddAccountPagePresentational: React.FC<
  IAddAccountPagePresentationalProps
> = ({ t }) => {
  return (
    <Center>
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
      >
        <FormPageTemplate title={t("addAccount")} form={<LoginForm />} />
      </Flex>
    </Center>
  );
};
