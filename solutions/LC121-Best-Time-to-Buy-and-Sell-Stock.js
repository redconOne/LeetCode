const maxProfit = (prices) => {
  let smallest = prices[0],
    maxProfit = 0;

  for (let num of prices) {
    if (num < smallest) smallest = num;
    if (maxProfit < num - smallest) maxProfit = num - smallest;
  }

  return maxProfit;
};

// Iterate through the prices array
// if current number is less than smallest, update smallest to be num
// if maxProfit is less than num-smallest, update maxProfit
// return maxProfit
