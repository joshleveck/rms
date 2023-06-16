import { invoke } from "@tauri-apps/api/tauri";
import { Maze, create_maze } from "./maze/maze";
import { appWindow, PhysicalSize } from "@tauri-apps/api/window";

interface State {
  maze: Maze;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

const throw_exception = (message: string): never => {
  throw new Error(message);
};

let state: State = {
  maze: create_maze(),
  canvas: document.getElementById("maze") as HTMLCanvasElement,
  ctx:
    (document.getElementById("maze") as HTMLCanvasElement).getContext("2d") ??
    throw_exception("Could not get canvas context"),
};

const initialize_canvas = (state: State): void => {
  update_canvas_size(state);

  state.ctx.fillStyle = "#000000";
  state.ctx.fillRect(0, 0, state.canvas.width, state.canvas.height);
};

const update_canvas_size = (state: State): void => {
  let length = 0;
  const OUTPUT_WIDTH = 300;
  const HEADER_HEIGHT = 55;

  if (
    document.body.clientWidth - OUTPUT_WIDTH <
    document.body.clientHeight - HEADER_HEIGHT
  ) {
    length = document.body.clientWidth - OUTPUT_WIDTH;
  } else {
    length = document.body.clientHeight - HEADER_HEIGHT;
  }
  state.canvas.width = length;
  state.canvas.height = length;
};

window.addEventListener("resize", () => {
  update_canvas_size(state);
});
window.addEventListener("load", () => {
  initialize_canvas(state);
});
