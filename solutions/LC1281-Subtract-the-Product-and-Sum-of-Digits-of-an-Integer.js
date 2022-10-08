const subtractProductAndSum = (n) => {
  const prod = n
      .toString()
      .split('')
      .map(Number)
      .reduce((total, item) => total * item, 1),
    sum = n
      .toString()
      .split('')
      .map(Number)
      .reduce((total, item) => total + item, 0);
  return prod - sum;
};

// first break down the number into a string, then array, then array of nums
// reduce array with * and + respectively
// return product - sum
