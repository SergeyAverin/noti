import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withAuth } from "@hocs/withAuth";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { NotePageTemplate } from "@templates/NotePageTemplate";
import { Header } from "@organisms/Header";
import { setNote } from "@redux/features/noteSlice";
import { RootState } from '@redux/store'


const NotesPage: React.FC = () => {
  const params = useParams();
  const slug  = params.slug as string
  const { isLoading, data } = useGetNoteQuery(slug)
  const dispatch = useDispatch()
  const note = useSelector((state: RootState) => state.noteState.note)
  useEffect(() => {
    if (data) {
      dispatch(setNote(data))
    }
  }, [isLoading, data])
  return (
    <>
        { !isLoading && note &&
        <>
          <Header note={note}  />
          <NotePageTemplate note={note} />
        </>
       }
    </>
  );
};

export default withAuth(NotesPage);
