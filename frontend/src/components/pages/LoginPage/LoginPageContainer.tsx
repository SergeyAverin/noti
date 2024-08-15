import React from "react";

import { LoginPagePresentational } from "./LoginPagePresentational";
import { useRedirectAuthorized } from "@hooks/useRedirectAuthorized";

/** This is page with login form */
export const LoginPageContainer: React.FC = () => {
  useRedirectAuthorized();
  return <LoginPagePresentational />;
};
