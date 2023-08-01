import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function withAuth(WrappedComponent: React.FC) {
  return function WithAuth() {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("token");

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/auth/login");
      }
    }, [isAuthenticated]);

    return <WrappedComponent />;
  };
}
