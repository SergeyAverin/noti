import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withAuth } from "@hocs/withAuth";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { Spinner, Center } from "@atoms/index";
import { NotePageTemplate } from "@templates/NotePageTemplate";
import { Header } from "@organisms/Header";
import { setNote } from "@redux/features/noteSlice";
import { noteSelector } from "@redux/selectors/note";


const NotesPage: React.FC = () => {
  const params = useParams();
  const slug  = params.slug as string
  const { isLoading, data } = useGetNoteQuery(slug)
  const note = useSelector(noteSelector)

  const dispatch = useDispatch()
  useEffect(() => {
    if (data) {
      dispatch(setNote(data))
    }
  }, [isLoading, data])
  
  return (
    <>
        { !isLoading && note ?
        <>
          <Header note={note}  />
          <NotePageTemplate note={note} />
        </>
        :
        <Center>
          <Spinner />
        </Center>
       }
    </>
  );
};

export default withAuth(NotesPage);
