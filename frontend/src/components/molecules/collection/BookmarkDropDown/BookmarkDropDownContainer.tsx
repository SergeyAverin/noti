import React from "react";
import { useTranslation } from "react-i18next";

import { BookmarkDropDownPresentational } from "./BookmarkDropDownPresentational";
import { useGetBookmarkQuery } from "@redux/api/libraryApi";

/** This component show notes from bookmarks*/
export const BookmarkDropDownContainer: React.FC = ({}) => {
  const { data, isLoading } = useGetBookmarkQuery();
  const { t } = useTranslation();

  return (
    <BookmarkDropDownPresentational isLoading={isLoading} notes={data} t={t} />
  );
};
