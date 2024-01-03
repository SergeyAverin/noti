import React from "react";
import { Center, Flex } from "@atoms/index";
import { LoginForm } from "@organisms/LoginForm";
import { useTranslation } from "react-i18next";

const AddAccountPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Center>
      <Flex justifyContent="flex-start" alignItems="center" flexDirection="column">
        <h2>{t('addAccount')}</h2>
        <LoginForm />
      </Flex>
    </Center>
  );
};

export default AddAccountPage;
