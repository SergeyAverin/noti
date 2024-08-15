import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** This hook remove auth token and redirect to login page  */
export const useLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  });
};
