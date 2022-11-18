const containsNearbyDuplicate = (nums, k) => {
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < i + k + 1 && j < nums.length; j++)
      if (nums[i] === nums[j]) return true;
  return false;
};

// iterate through nums
// look for nearby (k) elements that are the same
// if there are any elements that are the same as nums[i] return true;
// after complete iteration return false
