import React from "react";

import { DataCreatedStyled, DataCreatedMoreStyled } from "./DataCreatedStyled";

interface IDataCreatedProps {
  dataCreated: Date;
  dataEdited: Date;
}
export const DataCreated: React.FC<IDataCreatedProps> = ({
  dataCreated,
  dataEdited,
}) => {
  function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
  return (
    <DataCreatedStyled>
      Last edit at {formatDate(dataCreated)}
      <DataCreatedMoreStyled>
        Created at {formatDate(dataCreated)}
        <br />
        Last edit at {formatDate(dataEdited)}
      </DataCreatedMoreStyled>
    </DataCreatedStyled>
  );
};
