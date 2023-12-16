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
  isOpenDefaultValue?: boolean;
  icon?: any;
}

export const DropDownMenu: React.FC<IDropDownMenuProsp> = ({
  text,
  icon,
  children,
  isOpenDefaultValue
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefaultValue);
  const onClickHeandler = (event: React.MouseEvent) => {
    event.preventDefault();
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
  isOpenDefaultValue: false
};
