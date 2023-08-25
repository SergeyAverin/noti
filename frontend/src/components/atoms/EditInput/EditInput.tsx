import React, { useEffect, useState } from "react";

import { EditInputStyled } from "./EditInputStyled";

export const EditInput: React.FC = () => {
  const [text, setText] = useState("Editable text");


  return (
    <EditInputStyled>
      {text}
    </EditInputStyled>
  );
};
