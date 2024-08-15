import React from "react";
import { useTranslation } from "react-i18next";

import { TrashDropDownPresentational } from "./TrashDropDownPresentational";
import { useGetTrashQuery } from "@redux/api/libraryApi";

/** This component show notes from trash*/
export const TrashDropDownContainer: React.FC = ({}) => {
  const { data, isLoading } = useGetTrashQuery();
  const { t } = useTranslation();

  return (
    <TrashDropDownPresentational
      isLoading={isLoading}
      notes={data}
      t={t}
    />
  );
};
