const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
};

// convert to lowercase and remove all alphanumberic characters
// check to see if the string is the same both forwards and backwards.
