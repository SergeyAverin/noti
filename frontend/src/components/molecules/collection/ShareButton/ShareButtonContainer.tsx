import React from "react";

import { ShareButtonPresentational } from "./ShareButtonPresentational";
import { useCopyLinkInClipboard } from "./hooks/useCopyLinkInClipboard";
import { usePopup } from "@hooks/usePopup";

/** This component opened panel to search */
export const ShareButtonContainer: React.FC = () => {
  const [isOpened, toggleIsOpened] = usePopup();
  const copyLinkInClipboard = useCopyLinkInClipboard();

  return (
    <ShareButtonPresentational
      copyLinkInClipboard={copyLinkInClipboard}
      isOpened={isOpened}
      toggleIsOpened={toggleIsOpened}
    />
  );
};
