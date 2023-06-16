enum Direction {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

interface Cell {
  colour: number, // hex number
  x: number,
  y: number,
  walls: Direction[],
}

const create_cell = (x: number, y: number): Cell => {
  return {
    colour: 0,
    x,
    y,
    walls: [],
  };
}


export interface Maze {
  cells: Cell[][],
}

export const create_maze = (): Maze => {
  var cells: Cell[][] = [];
  for (var i = 0; i < 16; i++) {
    cells[i] = [];
    for (var j = 0; j < 16; j++) {
      cells[i][j] = create_cell(i, j);
      if (i === 0) {
        cells[i][j].walls.push(Direction.West);
      }
      if (i === 15) {
        cells[i][j].walls.push(Direction.East);
      }
      if (j === 0) {
        cells[i][j].walls.push(Direction.South);
      }
      if (j === 15) {
        cells[i][j].walls.push(Direction.North);
      }
    }
  }

  return {
    cells,
  };
}

const draw_maze = (maze: Maze, ctx: any): void => {

}
