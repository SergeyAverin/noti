import React from "react";
import { Link } from "react-router-dom";

import { NoteLinkStyled, NoteLinkWrapperStyled } from "./NoteLinkStyled";

import NoteIcon from "@public/NoteIcon.svg";

interface INoteLinkProsp {
  href: string;
  children: React.ReactNode;
  icon?: any;
}

export const NoteLink: React.FC<INoteLinkProsp> = ({ children, href }) => {
  return (
    <NoteLinkStyled>
      <Link to={href}>
        <NoteLinkWrapperStyled>
          <NoteIcon />
          {children}
        </NoteLinkWrapperStyled>
      </Link>
    </NoteLinkStyled>
  );
};

NoteLink.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
};
