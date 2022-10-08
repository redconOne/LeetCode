const createTargetArray = (nums, index) => {
  let result = [];
  for (let num of nums) result.splice(index.shift(), 0, num);
  return result;
};

// Using splice to insert each number in nums at the appropriate location.
