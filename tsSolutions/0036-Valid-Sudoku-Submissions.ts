export const isValidSudoku = (board: string[][]): boolean => {
  for (const row of board) if (hasDupe(row)) return false;

  for (let x = 0; x < board.length; ++x) {
    const col: string[] = [];

    for (let y = 0; y < board.length; ++y) col.push(board[y][x]);

    if (hasDupe(col)) return false;
  }

  for (let x = 0; x < board.length; x += 3) {
    for (let y = 0; y < board.length; y += 3) {
      let grid: string[] = [];

      grid = grid
        .concat(board[x].slice(y, y + 3))
        .concat(board[x + 1].slice(y, y + 3))
        .concat(board[x + 2].slice(y, y + 3));

      if (hasDupe(grid)) return false;
    }
  }

  return true;
};

export const hasDupe = (arr: string[]): boolean => {
  arr = arr.filter((item) => item !== '.');

  const dict: { [key: string]: number } = {};
  for (const item of arr)
    if (dict[item]) return true;
    else dict[item] = 1;

  return false;
};
