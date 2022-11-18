const balancedStringSplit = (str) => {
  let balancer = 0,
    counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'L') balancer++;
    else balancer--;
    if (balancer === 0) counter++;
  }

  return counter;
};

// iterate through entire string
// if str[i] is 'L' increment the balancer
// else decrement
// when balance is === 0 there is enough of both elements to balance out so increment counter
