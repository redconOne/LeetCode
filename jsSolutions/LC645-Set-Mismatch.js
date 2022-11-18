var findErrorNums = function (nums) {
  let dupe, missing;
  for (let num of nums)
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) {
      dupe = num;
      break;
    }

  nums.sort((a, b) => a - b);
  for (let i = 1; i <= nums.length; i++)
    if (!nums.includes(i)) {
      missing = i;
      break;
    }

  return [dupe, missing];
};

// First find duplicate by verifying locations of indexOf and lastIndexOf
// sort nums, and starting from 1 begin looking for missing number
// return duplicate and missing number
