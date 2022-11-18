const removeDuplicates = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) continue;
    nums[count] = nums[i];
    count++;
  }

  return count;
};

// Using two counters iterate through all of nums
// Any time there is a unique item located in nums OR the end of a set of duplicate numbers set num[count]
// increment count once a new position has been populated
// return count after the array has been mutated properly
