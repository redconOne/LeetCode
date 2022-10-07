const isIsomorphic = (str1, str2) => {
  let dict1 = {},
    dict2 = {};

  for (let idx in str1) {
    let char1 = str1[idx],
      char2 = str2[idx];
    if (!dict1[char1]) dict1[char1] = char2;
    else if (dict1[char1] !== char2) return false;
  }
  for (let idx in str2) {
    let char1 = str2[idx],
      char2 = str1[idx];
    if (!dict2[char1]) dict2[char1] = char2;
    else if (dict2[char1] !== char2) return false;
  }
  return true;
};

// Using two hashmaps (dictionaries) to compare two strings
// populate first dictionary. If str1's char isn't in dictionary dict1[char1] will return falsy
// if falsy we set dict1[char1] to char2's value
// if data already exists in dict1 we verify that they are equal values. If not, strings are not iso
// repeat operation for str2 vs str1
// after every char has been checked return true
