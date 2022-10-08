const numIdenticalPairs = (nums) => {
  let counter = 0;
  for (let current = 0, slider = 1; current < nums.length - 1; slider++) {
    if (nums[current] === nums[slider]) counter++;
    if (slider >= nums.length - 1) {
      current++;
      slider = current;
    }
  }
  return counter;
};

// Checking to see if numbers match using a sliding window method
