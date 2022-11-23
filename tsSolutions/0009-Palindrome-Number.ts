const isPalindrome = (num: number): boolean => {
  return num === +num.toString().split('').reverse().join('');
};

export default isPalindrome;
