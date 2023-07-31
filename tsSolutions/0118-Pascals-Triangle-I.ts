export const generate = (numRows: number): number[][] => {
  const result: number[][] = [[1]];

  for (let i = 1; i < numRows; ++i) {
    const row: number[] = [];
    const previous: number[] = result[i - 1];

    for (let j = 0; j < previous.length; ++j)
      row.push(previous[j] + (previous[j - 1] | 0));

    row.push(1);
    result.push(row);
  }

  return result;
};
