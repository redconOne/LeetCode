const plusOne = (digits) => {
  digits[digits.length - 1]++;
  let carry;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) digits[i]++;
    carry = false;
    if (digits[i] < 10) return digits;
    digits[i] -= 10;
    carry = true;
  }
  if (carry) digits.unshift(1);
  return digits;
};

// increment the last number in the array
// iterate through the array starting at the end
// if the number at i is less than 10 return digits
// otherwise -= by 10 and carry a 1 to the next location via carry
