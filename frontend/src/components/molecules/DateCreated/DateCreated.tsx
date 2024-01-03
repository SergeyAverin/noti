import React from "react";

import { DateCreatedStyled, DateCreatedMoreStyled } from "./DateCreatedStyled";
import { formatDate } from "@utils/formatedDate";
import { useTranslation } from "react-i18next";

interface IDateCreatedProps {
  dataCreated: Date;
  dataEdited: Date;
}
export const DateCreated: React.FC<IDateCreatedProps> = ({
  dataCreated,
  dataEdited,
}) => {
  const { t } = useTranslation();
  return (
    <DateCreatedStyled>
      <div>{t("dateEdited", { date: formatDate(dataEdited) })}</div>
      <DateCreatedMoreStyled>
        {t("dateCreated", { date: formatDate(dataCreated) })}
        <br />
        {t("dateEdited", { date: formatDate(dataEdited) })}
      </DateCreatedMoreStyled>
    </DateCreatedStyled>
  );
};
