const decode = (encoded, first) => {
  const result = [first];
  for (let i in encoded) result.push(result[i] ^ encoded[i]);
  return result;
};

// establish result array with first as the 0th element
// iterate through encoded, XORing the ith element with the previous element of result
