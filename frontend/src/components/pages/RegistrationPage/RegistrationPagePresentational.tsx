import React from "react";

import FormPageTemplate from "@templates/FormPageTemplate";
import { RegistrationForm } from "@organisms/account/RegistrationForm";

export const RegistrationPagePresentational: React.FC = () => {
  return <FormPageTemplate form={<RegistrationForm />} />;
};
