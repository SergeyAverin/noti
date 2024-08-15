export const useExecCommand = () => {
  const execCommand = (action: string, arg?: string) => {
    const selection = window.getSelection();
    if (selection) {
      let commandArgs = arg;
      if (!commandArgs) {
        commandArgs = selection.toString();
      }
      document.execCommand(action, false, commandArgs);
    }
  };

  return execCommand;
};
