const maximumWealth = (accounts) => {
  let result = 0;
  for (let account of accounts) {
    let total = account.reduce((sum, acc) => sum + acc, 0);
    if (total > result) result = total;
  }
  return result;
};

// reduce each subarray within accounts to a total
// if the total is greater than the current value stored in result, replace it
// return the largest subarray total
