const guessNumber = (num) => {
  let min = 0,
    max = num;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const apiResult = guess(mid);

    if (apiResult === 0) return mid;
    if (apiResult === 1) min = mid + 1;
    if (apiResult === -1) max = mid - 1;
  }

  return 0;
};

// Using a binary search to guess a number given responses of higher/correct/lower

// Start with a min and a max, find the middle by adding, dividing by two, and flooring
// if apiResult is 0 return current guess
// if apiResult is 1 guess must be higher, so set min to the guess + 1
// if apiResult is -1 guess must be lower, so set max to the guess - 1
