function runningSum(nums) {
  let acc = 0,
    result = [];
  for (let num of nums) {
    acc += num;
    result.push(acc);
  }
  return result;
}
