import React from "react";

import { CopyButtonStyled, ShareButtonStyled, SelectPermission } from "./ShareButtonStyled";
import { Popup, Button, Flex, Margin, Icon } from "@atoms/index";

import ShareIcon from "@public/ShareIcon.svg";

interface IShareButtonPresentationalProps {
  isOpened: boolean;
  toggleIsOpened: Function;
  copyLinkInClipboard: Function;
}

export const ShareButtonPresentational: React.FC<
  IShareButtonPresentationalProps
> = ({ isOpened, toggleIsOpened, copyLinkInClipboard }) => {
  return (
    <div>
      <ShareButtonStyled
        onClick={() => {
          toggleIsOpened();
        }}
      >
        <Icon icon={<ShareIcon />} />
      </ShareButtonStyled>
      {isOpened && (
        <Popup
          onClose={() => {
            toggleIsOpened();
          }}
        >
          <h2>Shared note</h2>
          <p>Select permission</p>
          <Margin mt={30} mb={40}>
            <Flex alignItems="center" justifyContent="flex-start">
              <SelectPermission>
                <option>Only read</option>
                <option>Only owner</option>
                <option>All permission</option>
              </SelectPermission>
              <Margin ml={30}>
                <CopyButtonStyled onClick={() => copyLinkInClipboard()}>
                  <ShareIcon />
                  Copy link
                </CopyButtonStyled>
              </Margin>
            </Flex>
          </Margin>
          <Flex alignItems="center" justifyContent="flex-start">
            <Margin mr={15}>
              <Button
                onClick={() => {
                  toggleIsOpened();
                }}
              >
                Cancel
              </Button>
            </Margin>
            <Button
              onClick={() => {
                toggleIsOpened();
              }}
              fill={true}
            >
              Apply
            </Button>
          </Flex>
        </Popup>
      )}
    </div>
  );
};
