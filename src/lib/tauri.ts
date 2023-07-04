import { invoke } from "@tauri-apps/api/tauri";

export const build = (): void => {
  invoke("build");
};

export const run = (): void => {
  invoke("run");
};

export const pause = (): void => {
  invoke("pause");
};

export const cancel = (): void => {
  invoke("cancel");
};
