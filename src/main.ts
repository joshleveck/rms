import { throw_exception } from "./exception";
import { Maze, create_maze } from "./maze/maze";
import { initialize_canvas } from "./draw";

interface State {
  maze: Maze;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

let state: State = {
  maze: create_maze(),
  canvas: document.getElementById("maze") as HTMLCanvasElement,
  ctx:
    (document.getElementById("maze") as HTMLCanvasElement).getContext("2d") ??
    throw_exception("Could not get canvas context"),
};

window.addEventListener("load", () => {
  initialize_canvas(state.ctx);
});
