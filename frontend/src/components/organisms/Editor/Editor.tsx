import React, { useCallback, useEffect, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import Markdown from "react-markdown";
import { Marked } from "@ts-stack/markdown";

import { ICell } from "@redux/types/cell";
import { TextFormattingTools } from "@molecules/TextFormattingTools";

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

  const toMarkDown = () => {
    setContent(Marked.parse(content));
    console.log(Marked.parse(content));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    // if (event.key === 'Enter') {
    // setContent(Marked.parse(content))
    // console.log(Marked.parse(content))
    // }
  };

  const handleBlur = () => {
    console.log(content)
  };

  return (
    <>
      <TextFormattingTools />
      <ContentEditable
        onKeyDown={handleKeyPress}
        html={content}
        onBlur={handleBlur}
        onChange={onContentChange}
      />
    </>
  );
};
