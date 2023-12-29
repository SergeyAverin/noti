import React from "react";
import { Link } from "react-router-dom";

import { NoteLinkStyled, NoteLinkWrapperStyled } from "./NoteLinkStyled";
import { shortenString } from "@utils/shortenString";

import NoteIcon from "@public/NoteIcon.svg";
import { Icon } from "..";

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
          <Icon icon={<NoteIcon />} />
          {shortenString(children as string, 20)}
        </NoteLinkWrapperStyled>
    </NoteLinkStyled>
      </Link>
  );
};

NoteLink.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
  haveBackground: false
};
