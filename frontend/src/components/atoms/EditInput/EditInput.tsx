import React, { useEffect, useState } from "react";

import { EditInputStyled } from "./EditInputStyled";


export const EditInput: React.FC = () => {
    const [text, setText] = useState('Editable text');

  function handleTextChange(event:  React.KeyboardEvent<HTMLDivElement>) {
    setText(event.currentTarget.innerText);
  }
    return (
        <EditInputStyled contentEditable={true} onInput={handleTextChange}>
            {text}
        </EditInputStyled>
    )
}
