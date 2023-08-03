import React from "react";
import { Link } from "react-router-dom";

import { LinkBGStyled } from "./LinkBGStyled";


interface ILinkBGProps {
    text: string,
    href: string
}

export const LinkBG:React.FC<ILinkBGProps> = ({ text, href }) => {
    return (
        <LinkBGStyled>
            <Link to={href}>{ text }</Link>
        </LinkBGStyled>
    )
} 
