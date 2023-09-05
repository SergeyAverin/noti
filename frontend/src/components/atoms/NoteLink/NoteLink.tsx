import React from "react";
import { Link } from "react-router-dom";

import { NoteLinkStyled, NoteLinkWrapperStyled } from "./NoteLinkStyled";
import { shortenString } from "@utils/shortenString";

import NoteIcon from "@public/NoteIcon.svg";

interface INoteLinkProsp {
  href: string;
  children: React.ReactNode;
  icon?: any;
  haveBackground?: boolean
}

export const NoteLink: React.FC<INoteLinkProsp> = ({ children, href, haveBackground }) => {
  return (
      <Link to={href}>
    <NoteLinkStyled  haveBackground={haveBackground}>
        <NoteLinkWrapperStyled>
          <NoteIcon />
          {shortenString(children as string, 15)}
        </NoteLinkWrapperStyled>
    </NoteLinkStyled>
      </Link>
  );
};

NoteLink.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
  haveBackground: false
};
