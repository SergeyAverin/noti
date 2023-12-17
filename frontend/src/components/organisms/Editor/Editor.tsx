import React, { useCallback, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { ICell } from "@redux/types/cell";
import { TextFormattingTools } from "@molecules/TextFormattingTools";
import { EditorStyled } from "./EditorStyled";

interface IEditorProps {
  cells: ICell[];
}

export const Editor: React.FC<IEditorProps> = ({ cells }) => {
  const [content, setContent] = useState("");

  const onContentChange = useCallback((evt: ContentEditableEvent) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };
    setContent(evt.currentTarget.innerHTML);
  }, []);

  return (
    <>
      <TextFormattingTools />
      <EditorStyled>
        <ContentEditable
          html={content}
          onChange={onContentChange}
          placeholder="Write your text"
        />
      </EditorStyled>
    </>
  );
};
