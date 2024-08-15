import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NotesPagePresentational } from "./NotesPagePresentational";
import { withAuth } from "@hocs/withAuth";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { setNote } from "@redux/features/noteSlice";
import { noteSelector } from "@redux/selectors/note";


const NotesPageContainer: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const { isLoading, data } = useGetNoteQuery(slug);
  const note = useSelector(noteSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setNote(data));
      document.title = data.title;
    }
  }, [isLoading, data]);

  return (
      <NotesPagePresentational note={note} isLoading={isLoading} />
  );
};

export default withAuth(NotesPageContainer);
