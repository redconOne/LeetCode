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

// for position 0, left will always be valued at 0, and right as the slice of string from idx 1 onwards
// if equal return for idx 0
// otherwise, as we iterate through the array we add the previous value to left
// we also subtract the current value (the pivot point) from right
// if left === right return current index
// if we make it through the entire array there was no pivot point, so return -1
