const twoSum = (nums, target) => {
  for (let num of nums)
    if (
      nums.includes(target - num) &&
      nums.indexOf(num) !== nums.lastIndexOf(target - num)
    )
      return [nums.indexOf(num), nums.lastIndexOf(target - num)];
};

// iterate through nums checking to see if there any number is complementary
// once found ensure that they are located at separate indices
// return both indices
