const removeDuplicates = (nums: number[]): number => {
  let current = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== nums[i + 1]) {
      nums[current] = nums[i];
      current++;
    }
  }

  return current;
};

export default removeDuplicates;
