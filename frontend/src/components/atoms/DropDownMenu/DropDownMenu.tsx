import React, { Children, useState } from "react";

import {
  DropDownMenuStyled,
  DropDownMenuTextStyled,
  DropDownMenuWrapperStyled,
} from "./DropDownMenuStyled";

import ArrowIcon from "@public/ArrowIcon.svg";
import NoteIcon from "@public/NoteIcon.svg";

interface IDropDownMenuProsp {
  text: string;
  children: React.ReactNode;
  icon?: any;
}

export const DropDownMenu: React.FC<IDropDownMenuProsp> = ({
  text,
  icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHeandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <DropDownMenuWrapperStyled>
      <DropDownMenuStyled onClick={onClickHeandler}>
        <DropDownMenuTextStyled>
          {icon}
          {text}
        </DropDownMenuTextStyled>
        <ArrowIcon transform={isOpen ? "rotate(0 0 0)" : "rotate(-90 0 0)"} />
      </DropDownMenuStyled>
      {isOpen && children}
    </DropDownMenuWrapperStyled>
  );
};

DropDownMenu.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
};
