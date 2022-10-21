const addBinary = (a, b) => {
  let carry = 0,
    result = '';
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  for (let i = 0; i < a.length || i < b.length; i++) {
    let temp = (+a[i] || 0) + (+b[i] || 0) + carry;
    result = temp % 2 ? 1 + result : 0 + result;
    carry = temp > 1 ? 1 : 0;
  }
  return carry ? 1 + result : result;
};

// declare vars to hold a carryOver during addition, as well as a result
// reverse initial strings to make it easier to navigate
// perform addition. Add values at ith position as well as the carry over together
// if temp is odd, add 1 to result otherwise add a 0
// if temp is greater than 1 we need to hold a carryover otherwise, set carry to 0
// return result, along with remaining carry (if any)
