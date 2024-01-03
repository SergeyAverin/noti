import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "@pages/LoginPage";
import LogoutPage from "@pages/LogoutPage";
import RegistrationPage from "@pages/RegistrationPage";
import AddAccountPage from "@pages/AddAccountPage";

const AuthRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" Component={LoginPage} />
            <Route path="/logout" Component={LogoutPage} />
            <Route path="/registration" Component={RegistrationPage} />
            <Route path="/add-account" Component={AddAccountPage} />
        </Routes>
    )
}

export default AuthRouter;
