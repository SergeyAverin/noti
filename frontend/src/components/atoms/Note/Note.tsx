import React from "react";
import { Link } from "react-router-dom";

import { NoteLinkStyled, NoteStyled } from "./NoteStyled";

import NoteIcon from "@public/NoteIcon.svg";

interface INoteProsp {
  href: string;
  children: React.ReactNode;
  icon?: any;
}

export const Note: React.FC<INoteProsp> = ({ children, href }) => {
  return (
    <NoteStyled>
      <Link to={href}>
        <NoteLinkStyled>
          <NoteIcon />
          {children}
        </NoteLinkStyled>
      </Link>
    </NoteStyled>
  );
};

Note.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
};
