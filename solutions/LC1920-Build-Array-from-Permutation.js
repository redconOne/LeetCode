const buildArray = (nums) => {
  let result = [];
  for (let num of nums) result.push(nums[num]);
  return result;
};

// The goal is to use each value of the nums array to shove a specific value into result
// the value put into result is nums[ current num ]
