import React, { Children, useState } from "react";

import {
  ToolButtonDropDownStyled,
  ToolButtonDropDownTextStyled,
  ToolButtonDropDownWrapperStyled,
} from "./ToolButtonDropDownStyled";

import ArrowIcon from "@public/ArrowIcon.svg";
import NoteIcon from "@public/NoteIcon.svg";
import { Icon } from "..";

interface IToolButtonDropDownProsp {
  children: React.ReactNode;
  isOpenDefaultValue?: boolean;
  icon?: any;
}

export const ToolButtonDropDown: React.FC<IToolButtonDropDownProsp> = ({
  icon,
  children,
  isOpenDefaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefaultValue);
  const onClickHeandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const onMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    blur();
  };
  return (
    <ToolButtonDropDownWrapperStyled>
      <ToolButtonDropDownStyled onClick={onClickHeandler}>
        <ToolButtonDropDownTextStyled>{icon}</ToolButtonDropDownTextStyled>
        <Icon icon={<ArrowIcon transform={isOpen ? "rotate(0 0 0)" : "rotate(-90 0 0)"} />} />
      </ToolButtonDropDownStyled>
      {isOpen && <div onMouseDown={onMouseDown}>{children}</div>}
    </ToolButtonDropDownWrapperStyled>
  );
};

ToolButtonDropDown.defaultProps = {
  icon: <NoteIcon></NoteIcon>,
  isOpenDefaultValue: false,
};
