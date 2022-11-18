const mySqrt = (x) => {
  for (let i = 1; i <= x; i++)
    if (i * i === x) return i;
    else if (i * i > x) return i - 1;
  return x;
};

// starting at 1 check to see if i * i is equal to x
// if so, return i
// else if i * i is greater than x return the previous i
// if x is less than 1 the for is ignored and return x
