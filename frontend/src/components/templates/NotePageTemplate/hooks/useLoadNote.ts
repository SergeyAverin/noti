import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useLoadNoteMutation } from "@redux/api/noteApi";
import { setContent } from "@redux/features/noteSlice";

export const useLoadNote = (slug: string) => {
  const dispatch = useDispatch();
  const [loadNote] = useLoadNoteMutation();

  useEffect(() => {
    loadNote(slug)
      .unwrap()
      .then((data) => {
        dispatch(setContent(data.data));
      });
  }, [slug]);
};
