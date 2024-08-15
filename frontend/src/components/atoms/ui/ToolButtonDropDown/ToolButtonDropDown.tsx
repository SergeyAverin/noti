import React, { useState } from "react";

import {
  ToolButtonDropDownStyled,
  ToolButtonDropDownTextStyled,
  ToolButtonDropDownWrapperStyled,
} from "./ToolButtonDropDownStyled";
import { Icon } from "../Icon/Icon";

import ArrowIcon from "@public/ArrowIcon.svg";
import NoteIcon from "@public/NoteIcon.svg";

interface IToolButtonDropDownProps {
  children: React.ReactNode;
  isOpenDefaultValue?: boolean;
  icon?: any;
}

export const ToolButtonDropDown: React.FC<IToolButtonDropDownProps> = ({
  icon,
  children,
  isOpenDefaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefaultValue);
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const onMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    blur();
  };
  return (
    <ToolButtonDropDownWrapperStyled>
      <ToolButtonDropDownStyled onClick={onClick}>
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
