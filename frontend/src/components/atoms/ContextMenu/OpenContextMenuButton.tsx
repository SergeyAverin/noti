import React, { useState } from "react";

import { OpenContextMenuButtonStyled } from './ContextMenuStled'

interface IOpenContextMenuButtonProps {
  contextMenu: React.ReactNode;
  icon: React.ReactNode;
}

export const OpenContextMenuButton: React.FC<IOpenContextMenuButtonProps> = ({
  contextMenu,
  icon,
}) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive((prev) => !prev);
  };
  const onMouseLeave = () => {
    setIsActive(false)
  }
  return (
      <OpenContextMenuButtonStyled onClick={onClick} onMouseLeave={onMouseLeave}>
        {icon}
        {isActive && contextMenu}
      </OpenContextMenuButtonStyled>
  );
};
