const isSubsequence = (subStr, str) => {
  let result = '';
  for (
    let subStrIdx = 0, strIdx = 0;
    subStrIdx < subStr.length && strIdx < str.length;
    strIdx++
  ) {
    if (subStr[subStrIdx] === str[strIdx]) {
      result += str[strIdx];
      subStrIdx++;
    }
  }
  return result === subStr;
};

// Create result (for a comparison later)
// Using two pointers, one to keep track of substring and one for main string
// Main string iterator (strIdx) will continue iterating through every element once per iteration
// substring iterator (subStrIdx) will only iterate when values match.
// values will populate into result var once matching occurs as well
// once loop is complete verify that all of subStr was found by comparing result to subStr
