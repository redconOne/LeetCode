const lengthOfLastWord = (str) =>
  str.trim().split(' ')[str.trim().split(' ').length - 1].length;

// trim to account for strings that end with '    '
// split the string by ' ' to find words
// index the split string at its last position and return that item's length
