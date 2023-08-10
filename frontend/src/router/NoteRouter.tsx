import React from "react";
import { Route, Routes } from "react-router-dom";

import NotesPage from "@pages/NotesPage";
import TrashPage from "@pages/TrashPage";
import { SideBar } from "@organisms/SideBar";

const NoteRouter: React.FC = () => {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/:slug" element={<NotesPage />} />
      </Routes>
    </>
  );
};

export default NoteRouter;
