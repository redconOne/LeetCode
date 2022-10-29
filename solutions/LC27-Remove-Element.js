const removeElement = (nums, val) => {
  let counter = 0;
  for (let num of nums)
    if (num !== val) {
      nums[counter] = num;
      counter++;
    }
  return counter;
};

// use counter to set nums properly
// while iterating through nums, if that particular num isnt value
// add that value nums @ counter, then increment counter
// return counter after array has been properly mutated
