import React from "react";
import { Link } from "react-router-dom";

import { LinkBGStyled } from "./LinkBGStyled";

export interface ILinkBGProps {
  /** Text on link */
  text: string;

  /** Link href */
  href: string;
}

/** This component is fill the background when you hover */
export const LinkBG: React.FC<ILinkBGProps> = ({ text, href }) => {
  return (
    <LinkBGStyled>
      <Link to={href}>{text}</Link>
    </LinkBGStyled>
  );
};
