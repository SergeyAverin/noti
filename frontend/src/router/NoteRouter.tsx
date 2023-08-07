import React from "react";
import { Route, Routes } from "react-router-dom";

import NotesPage from "@pages/NotesPage";
import { SideBar } from "@organisms/SideBar";
import { Header } from "@organisms/Header";

const NoteRouter: React.FC = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/:slug" element={<NotesPage />} />
      </Routes>
    </>
  );
};

export default NoteRouter;
