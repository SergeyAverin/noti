import { setupWorker } from "msw/browser";

import { handlers } from "./handlers/index";

export const worker = setupWorker(...handlers);

export function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  console.log("start msw");
  return worker.start();
}
