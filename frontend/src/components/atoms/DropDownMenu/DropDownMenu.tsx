import React, { Children, useState } from "react";

import {
  DropDownMenuStyled,
  DropDownMenuTextStyled,
  DropDownMenuWrapperStyled,
} from "./DropDownMenuStyled";

import ArrowIcon from "@public/ArrowIcon.svg";
import NoteIcon from "@public/NoteIcon.svg";
import { Icon } from "..";

export interface IDropDownMenuProps extends React.PropsWithChildren {
  /** This is text in button */
  text: string;

  /** default open state */
  isOpenDefaultValue?: boolean;

  /** Icon in button */
  icon?: any;
}

/** This component open or close content */
export const DropDownMenu: React.FC<IDropDownMenuProps> = ({
  text,
  icon,
  children,
  isOpenDefaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefaultValue);
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <DropDownMenuWrapperStyled>
      <DropDownMenuStyled onClick={onClick}>
        <DropDownMenuTextStyled>
          {icon}
          {text}
        </DropDownMenuTextStyled>
        <Icon
          icon={
            <ArrowIcon
              transform={isOpen ? "rotate(0 0 0)" : "rotate(-90 0 0)"}
            />
          }
        />
      </DropDownMenuStyled>
      {isOpen && children}
    </DropDownMenuWrapperStyled>
  );
};

DropDownMenu.defaultProps = {
  icon: <Icon icon={<NoteIcon />} />,
  isOpenDefaultValue: false,
};
