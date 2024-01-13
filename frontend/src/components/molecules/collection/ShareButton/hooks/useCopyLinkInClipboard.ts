/** This hook is return function to copy link in clipboard */
export const useCopyLinkInClipboard = () => {
  const copyLinkFunc = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  return copyLinkFunc;
};
