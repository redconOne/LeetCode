const pivotIndex = (nums) => {
  let left = 0,
    right = nums.slice(1).reduce((sum, acc) => sum + acc, 0);
  if (left === right) return 0;
  for (let i = 1; i < nums.length; i++) {
    left += nums[i - 1];
    right -= nums[i];
    if (left === right) return i;
  }
  return -1;
};
