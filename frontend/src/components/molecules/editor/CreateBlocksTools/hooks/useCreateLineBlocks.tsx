import { useExecCommand } from "@hooks/useExecCommand";

/** This hook return function, that function on call create line in text editor */
export const useCreateLineBlocks = (): Function => {
  const execCommand = useExecCommand();

  const createLine = () => {
    const selection = window.getSelection();
    if (selection) {
      const text = selection.toString();
      console.log(text);
      execCommand("insertHTML", '<hr  contenteditable="false" />');
    }
  };

  return createLine;
};
