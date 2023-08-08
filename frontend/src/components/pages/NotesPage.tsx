import React from "react";
import { useParams } from "react-router-dom";

import { withAuth } from "@hocs/withAuth";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { NoteTemplate } from "@templates/NoteTemplate/NoteTemplate";

const NotesPage: React.FC = () => {
  const params = useParams();
  const slug  = params.slug as string
  const { isLoading, data } = useGetNoteQuery(slug)

  return (
    <>
        { !isLoading && data &&
        <NoteTemplate note={data} />
       }
    </>
  );
};

export default withAuth(NotesPage);
