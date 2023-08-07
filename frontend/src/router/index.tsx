import React from "react";

import { Route, Routes } from "react-router-dom";

import NoteRouter from "./NoteRouter";
import AuthRouter from "./AuthRouter";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/notes/*" element={<NoteRouter />} />
    </Routes>
  );
};

export default MainRouter;
