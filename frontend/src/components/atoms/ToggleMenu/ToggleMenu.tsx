import React, { Children, useState } from "react";

import { ToggleMenuStyled, ToggleMenuTextStyled, ToggleMenuWrapperStyled } from "./ToggleMenuStyled";
import ArrowIcon from "@public/ArrowIcon.svg";
import NoteIcon from "@public/NoteIcon.svg";

interface IToggleMenuProsp {
  text: string;
  children: React.ReactNode;
  icon?: any;
}

export const ToggleMenu: React.FC<IToggleMenuProsp> = ({ text, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHeandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ToggleMenuWrapperStyled>
        <ToggleMenuStyled onClick={onClickHeandler}>
        <ToggleMenuTextStyled>
            {icon}
            {text}
        </ToggleMenuTextStyled>
        <ArrowIcon transform={isOpen ? "rotate(0 0 0)" : "rotate(-90 0 0)"} />
        </ToggleMenuStyled>
        { isOpen && children }
      </ToggleMenuWrapperStyled>
  );
};

ToggleMenu.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
};
