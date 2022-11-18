const searchInsert = (nums, target) => {
  let min = 0,
    max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) min = mid + 1;
    else max = mid - 1;
  }
  return max + 1;
};

// utilizing a binary sort to locate the proper position to insert
