const smallerNumbersThanCurrent = (nums) => {
  const result = [];
  for (let num of nums) result.push(nums.filter((item) => item < num).length);
  return result;
};

// populate result while iterating through nums
// compare each number to the array filtered by numbers smaller than num
