import React from "react";
import { Link } from "react-router-dom";

import { NoteLinkStyled, NoteLinkWrapperStyled } from "./NoteLinkStyled";
import { shortenString } from "@utils/shortenString";

import NoteIcon from "@public/NoteIcon.svg";
import { Icon } from "../..";

export interface INoteLinkProps extends React.PropsWithChildren {
  /** href in link */
  href: string;

  /** icon in link */
  icon?: React.ReactNode;

  /** filled background */
  haveBackground?: boolean;
}

/** LInk with icon to note */
export const NoteLink: React.FC<INoteLinkProps> = ({
  children,
  href,
  haveBackground,
  icon,
}) => {
  return (
    <Link to={href}>
      <NoteLinkStyled haveBackground={haveBackground}>
        <NoteLinkWrapperStyled>
          <Icon icon={icon} />
          {shortenString(children as string, 20)}
        </NoteLinkWrapperStyled>
      </NoteLinkStyled>
    </Link>
  );
};

NoteLink.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
  haveBackground: false,
};
