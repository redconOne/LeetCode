const decompressRLElist = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i += 2)
    result = result.concat(new Array(nums[i]).fill(nums[i + 1]));
  return result;
};

// element 1 and every other element are the number we're populating
// element 0 and every other element are the frequency of uses
