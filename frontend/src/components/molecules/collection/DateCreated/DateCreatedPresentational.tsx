import React from "react";
import { TFunction } from "i18next";

import { DateCreatedStyled, DateCreatedMoreStyled } from "./DateCreatedStyled";

interface IDateCreatedPresentationalProps {
  dataCreated: string;
  dataEdited: string;
  t: TFunction;
}
export const DateCreatedPresentational: React.FC<
  IDateCreatedPresentationalProps
> = ({ dataCreated, dataEdited, t }) => {
  return (
    <DateCreatedStyled>
      <div>{t("dateEdited", { date: dataEdited })}</div>
      <DateCreatedMoreStyled>
        {t("dateCreated", { date: dataCreated })}
        <br />
        {t("dateEdited", { date: dataEdited })}
      </DateCreatedMoreStyled>
    </DateCreatedStyled>
  );
};
