import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withAuth } from "@hocs/withAuth";
import { useGetNoteQuery } from "@redux/api/noteApi";
import { Spinner, Center, Margin } from "@atoms/index";
import { NotePageTemplate } from "@templates/NotePageTemplate";
import { Header } from "@organisms/Header";
import { setNote } from "@redux/features/noteSlice";
import { noteSelector } from "@redux/selectors/note";
import { useTheme } from "styled-components";
import { ToolsBar } from "@organisms/ToolsBar";


const NotesPage: React.FC = () => {
  const params = useParams();
  const slug  = params.slug as string
  const { isLoading, data } = useGetNoteQuery(slug)
  const note = useSelector(noteSelector)
  const theme = useTheme();

  const dispatch = useDispatch()
  useEffect(() => {
    if (data) {
      dispatch(setNote(data))
      document.title = data.title;
    }
  }, [isLoading, data])

  return (
    <>
        { !isLoading && note ?
        <>
          <Header note={note}  />
          <Margin ml={parseInt(theme.panelsSize.sideBarSize)} mt={parseInt(theme.panelsSize.headerSize)}>
            <ToolsBar />
          </Margin>
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
