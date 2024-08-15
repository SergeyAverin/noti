import React from "react";

import { FormPageTemplatePresentational } from "./FormPageTemplatePresentational";

interface IFormPageTemplateContainerProps {
  form: React.ReactNode;
  title?: string | undefined;
}

export const FormPageTemplateContainer: React.FC<
  IFormPageTemplateContainerProps
> = ({ form, title }) => {
  return <FormPageTemplatePresentational form={form} title={title} />;
};
