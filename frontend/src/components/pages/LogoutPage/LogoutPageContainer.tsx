import React from "react";

import { LogoutPagePresentational } from "./LogoutPagePresentational";
import { useLogout } from "./hooks/useLogout";

/** This is page with login form */
export const LogoutPageContainer: React.FC = () => {
  useLogout();
  return <LogoutPagePresentational />;
};
