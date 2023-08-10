import React from "react";
import { useParams } from "react-router-dom";

import { withAuth } from "@hocs/withAuth";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { NotePageTemplate } from "@templates/NotePageTemplate";
import { Header } from "@organisms/Header";

const NotesPage: React.FC = () => {
  const params = useParams();
  const slug  = params.slug as string
  const { isLoading, data } = useGetNoteQuery(slug)
  return (
    <>
        { !isLoading && data &&
        <>
          <Header note={data}  />
          <NotePageTemplate note={data} />
        </>
       }
    </>
  );
};

export default withAuth(NotesPage);
