const decodeMessage = (key, message) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz',
    dict = { ' ': ' ' };
  var counter = 0,
    result = '';

  for (let char of key)
    if (!dict[char]) {
      dict[char] = alphabet[counter];
      counter++;
    }

  for (let char of message) result += dict[char];

  return result;
};

// setup alphabet for a track what letter you are on with counter var
// this can also be done with charCodes to save on memory

// populate dictionary with key, then reference dictionary to create result
