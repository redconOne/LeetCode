const climbStairs = (num: number): number => {
  let first = 1,
    second = 2,
    current = 2;

  if (num === 1) return first;

  while (current < num) {
    const temp: number = first + second;
    first = second;
    second = temp;
    current++;
  }

  return second;
};

export default climbStairs;
