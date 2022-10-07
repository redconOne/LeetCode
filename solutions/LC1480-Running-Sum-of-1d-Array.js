function runningSum(nums) {
  let acc = 0,
    result = [];
  for (let num of nums) {
    acc += num;
    result.push(acc);
  }
  return result;
}

// Using a method with an accumulator for tracking
// add current index of num to accumulator, and then push acc value into result array to be returned
