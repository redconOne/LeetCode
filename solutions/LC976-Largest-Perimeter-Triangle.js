const largestPerimeter = (nums) => {
  nums.sort((a, b) => b - a);

  for (let idx = 0; idx < nums.length; idx++)
    if (nums[idx] < nums[idx + 1] + nums[idx + 2])
      return nums[idx] + nums[idx + 1] + nums[idx + 2];
  return 0;
};

// first we sort the array from greatest to least

// given three lengths, we can know that to make a triangle one of 3 things needs to be true
// a + b > c
// a + c > b
// b + c > a

// knowing this, we can iterate from greatest to least, finding the smallest number that will allow us to use the above formula
