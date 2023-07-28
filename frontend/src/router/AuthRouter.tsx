import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../components/pages/LoginPage";
import LogoutPage from "../components/pages/LogoutPage";

const AuthRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" Component={LoginPage} />
            <Route path="/logout" Component={LogoutPage} />
        </Routes>
    )
}

export default AuthRouter;
