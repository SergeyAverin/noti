import React from "react";
import { Route, Routes } from "react-router-dom";

import NotesPage from "../components/pages/NotesPage";

const NoteRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<NotesPage />} />
        </Routes>
    )
}

export default NoteRouter;
