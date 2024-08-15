import React from "react";

import { LoginForm } from "@organisms/account/LoginForm";
import FormPageTemplate from "@templates/FormPageTemplate";

export const LoginPagePresentational: React.FC = () => {
  return <FormPageTemplate form={<LoginForm />} />;
};
