import { COLOURS } from "./utils/colours";
import { Direction } from "./utils/directions";

const MAZE_SIZE = 576;
const SQUARE_SIZE = 36;
const BORDER_WIDTH = 2;

export const initialize_canvas = (ctx: any): void => {
    ctx.fillStyle = COLOURS.DARK_GREY;
    ctx.fillRect(0, 0, 576, 576);

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            for (let dir = 0; dir < 4; dir++) {
                draw_border(ctx, i * 36, j * 36, dir, COLOURS.EDGES);
            }
        }
    }
}

export const draw_block = (ctx: any, x: number, y: number, colour: string): void => {
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, 36, 36);
}

export const draw_border = (ctx: any, x: number, y: number, dir: Direction, colour: string): void => {
    ctx.fillStyle = colour;
    switch (dir) {
        case Direction.North:
            ctx.fillRect(x, y, 36, BORDER_WIDTH);
            break;
        case Direction.East:
            ctx.fillRect(x + 35, y, BORDER_WIDTH, 36);
            break;
        case Direction.South:
            ctx.fillRect(x, y + 35, 36, BORDER_WIDTH);
            break;
        case Direction.West:
            ctx.fillRect(x, y, BORDER_WIDTH, 36);
            break;
    }
}