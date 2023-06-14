enum Directions {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

interface Cell {
  colour: number, // hex number
  x: number,
  y: number,
  walls: Directions[],
}

interface Maze {
  cells: Cell[][],
}

const create_maze = (): Maze => {
  var cells = Array<Cell[]>(16).fill(Array<Cell>(16).fill({ colour: 0, x: 0, y: 0, walls: [] }));

  for (var i = 0; i < 16; i++) {
    cells[i][0].walls.push(Directions.South);
    cells[i][15].walls.push(Directions.North);
    cells[0][i].walls.push(Directions.West);
    cells[15][i].walls.push(Directions.East);
  }
  return {
    cells,
  };
}
