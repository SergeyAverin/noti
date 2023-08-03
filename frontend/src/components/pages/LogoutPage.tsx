import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { withAuth } from "@hocs/withAuth";
import { Center, Spinner } from "@atoms/index";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  });
  return (
    <Center>
      <Spinner />
    </Center>
  );
};

export default withAuth(LogoutPage);
