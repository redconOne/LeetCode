const removeElement = (nums: number[], val: number): number => {
  let current = 0;

  for (let i = 0; i < nums.length; ++i)
    if (nums[i] !== val) {
      nums[current] = nums[i];
      current++;
    }

  return current;
};

export default removeElement;
