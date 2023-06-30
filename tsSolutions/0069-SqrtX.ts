const mySqrt = (num: number): number => {
  for (let i = 0; i <= num; ++i) {
    if (i * i === num) return i;
    if (i * i > num) return i - 1;
  }
  return 0;
};

export default mySqrt;
