const countAndSay = (n) => {
  let result = '1';

  for (let i = 1; i < n; i++) {
    let arr = result.split(''),
      count = 1;
    result = '';

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[j + 1]) {
        result += count + arr[j];
        count = 1;
      } else count++;
    }
  }
  return result;
};

// starting with a base response of '1'

// split the string into an array
// count each char of the array and repopulate result accordingly

// after the initial for has run 'n' number of times, return result
