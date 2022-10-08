const shuffle = (nums, n) => {
  let result = [];
  for (let i = 0; i < nums.length - n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};

// array is stored as coordinates where [x1, x2, x3, y1, y2, y3]. n is the point where y coords start
// creating a new array that is formatted as [x1, y1, x2, y2, x3, y3]
