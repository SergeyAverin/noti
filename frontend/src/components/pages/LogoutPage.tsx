import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { withAuth } from "@hocs/withAuth";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(()=> {
    localStorage.removeItem('token')
    navigate('/auth/login')
  })
  return <div>logout</div>;
};

export default withAuth(LogoutPage);
