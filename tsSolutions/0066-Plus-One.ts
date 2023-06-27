const plusOne = (digits: number[]): number[] => {
  digits[digits.length - 1]++;

  let carry = false;

  for (let i: number = digits.length - 1; i >= 0; --i) {
    if (carry) digits[i]++;
    if (digits[i] < 10) return digits;
    digits[i] -= 10;
    carry = true;
  }

  return [1].concat(digits);
};

export default plusOne;
