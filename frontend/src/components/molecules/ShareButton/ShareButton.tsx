import React, { useState } from "react";

import { Popup, Button, Flex, Margin } from "@atoms/index";
import { CopyButtonStyled, ShareButtonStyled } from "./ShareButtonStyled";
import ShareIcon from "@public/ShareIcon.svg";
import { SelectPermission } from "./ShareButtonStyled";

export const ShareButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopupHeandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <ShareButtonStyled onClick={openPopupHeandler}>
        <ShareIcon />
      </ShareButtonStyled>
      {isOpen && (
        <Popup closeFunction={openPopupHeandler}>
            <h2>Shared note</h2>
            <p>Select permision</p>
            <Margin mt={30} mb={40}>
                <Flex alignItems="center" justifyContent="flex-start">
                    <SelectPermission>
                        <option>Only read</option>
                        <option>Only owner</option>
                        <option>All permission</option>
                    </SelectPermission>
                    <Margin ml={30}>
                    <CopyButtonStyled>
                        <ShareIcon />
                        Coppy link
                    </CopyButtonStyled>
                    </Margin>

                </Flex>
            </Margin>
            <Flex alignItems="center" justifyContent="flex-start">
                <Margin mr={15}>
                    <Button onClick={openPopupHeandler}>Cencel</Button>
                </Margin>
                <Button onClick={openPopupHeandler} fill={true}>
                    Apply
                </Button>
            </Flex>
        </Popup>
      )}
    </div>
  );
};
