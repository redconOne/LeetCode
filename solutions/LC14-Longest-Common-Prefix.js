const longestCommonPrefix = (strs) => {
  let result = '',
    prefix = '',
    gogo = true;
  for (let i = 0; i < strs[0].length && gogo; i++) {
    prefix += strs[0][i];
    for (let str of strs)
      if (!str.startsWith(prefix)) {
        gogo = false;
        break;
      }
    if (!gogo) break;
    result = prefix;
  }
  return result;
};

// compare the beginning of each word by prefix.
// if it does begin with prefix, add another char to the prefix
// otherwise return the result
