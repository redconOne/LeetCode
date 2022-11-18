const reverseWords = (str) =>
  str
    .split(' ')
    .filter((item) => item)
    .reverse()
    .join(' ');

// split into words
// remove empty ' ' spaces
// reverse
// join with spaces
// due to the filter we don't need to trim leading/trailing whitespaces
