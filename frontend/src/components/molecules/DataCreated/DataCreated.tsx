import React from "react";

import { DataCreatedStyled, DataCreatedMoreStyled } from "./DataCreatedStyled";
import { formatDate } from "@utils/formatedDate";

interface IDataCreatedProps {
  dataCreated: Date;
  dataEdited: Date;
}
export const DataCreated: React.FC<IDataCreatedProps> = ({
  dataCreated,
  dataEdited,
}) => {
  return (
    <DataCreatedStyled>
      <div>
        Last edit at {formatDate(dataEdited)}
      </div>
      <DataCreatedMoreStyled>
        Created at {formatDate(dataCreated)}
        <br />
        Last edit at {formatDate(dataEdited)}
      </DataCreatedMoreStyled>
    </DataCreatedStyled>
  );
};
