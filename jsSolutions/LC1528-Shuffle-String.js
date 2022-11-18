const restoreString = (s, indices) => {
  let result = new Array(s.length);
  for (let char of s) result[indices.shift()] = char;
  return result.join('');
};

// create an array an the appropriate length (s.length)
// populate array indices with s values @ indices index
// return joined array
