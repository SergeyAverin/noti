export const useExecCommandParams = () => {
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

  const execCommandParam = (action: string, param: string) => {
    execCommand(action, param);
  };

  return execCommandParam;
};
