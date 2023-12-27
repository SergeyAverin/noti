import React from "react";

import { DateCreatedStyled, DateCreatedMoreStyled } from "./DateCreatedStyled";
import { formatDate } from "@utils/formatedDate";

interface IDateCreatedProps {
  dataCreated: Date;
  dataEdited: Date;
}
export const DateCreated: React.FC<IDateCreatedProps> = ({
  dataCreated,
  dataEdited,
}) => {
  return (
    <DateCreatedStyled>
      <div>
        Last edit at {formatDate(dataEdited)}
      </div>
      <DateCreatedMoreStyled>
        Created at {formatDate(dataCreated)}
        <br />
        Last edit at {formatDate(dataEdited)}
      </DateCreatedMoreStyled>
    </DateCreatedStyled>
  );
};
