import React from "react";
import { Route, Routes } from "react-router-dom";

import NotesPage from "@pages/NotePage";
import TrashPage from "@pages/TrashPage";

const NoteRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/:slug" element={<NotesPage />} />
      </Routes>
  );
};

export default NoteRouter;
