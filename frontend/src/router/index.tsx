import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NoteRouter from "./NoteRouter";
import AuthRouter from "./AuthRouter";

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<NoteRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
