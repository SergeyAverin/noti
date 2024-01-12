import React from "react";
import { useTranslation } from "react-i18next";

import { DateCreatedPresentational } from "./DateCreatedPresentational";
import { formatDate } from "@utils/formattedDate";

interface IDateCreatedContainerProps {
  dataCreated: Date;
  dataEdited: Date;
}

/** This component show when note in created and when last edited */
export const DateCreatedContainer: React.FC<IDateCreatedContainerProps> = ({
  dataCreated,
  dataEdited,
}) => {
  const { t } = useTranslation();
  const dateCreatedFormatted = formatDate(dataCreated);
  const dataEditedFormatted = formatDate(dataEdited);

  return (
    <DateCreatedPresentational
      dataCreated={dateCreatedFormatted}
      dataEdited={dataEditedFormatted}
      t={t}
    />
  );
};
