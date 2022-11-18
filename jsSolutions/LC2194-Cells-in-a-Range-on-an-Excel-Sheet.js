const cellsInRange = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    endChar = alphabet.indexOf(str[3]),
    startRow = +str[1],
    endRow = +str[4],
    result = [];
  var currentChar = alphabet.indexOf(str[0]);

  for (let i = 0; currentChar <= endChar; i++) {
    result.push(alphabet[currentChar] + (i + startRow));
    if (i + startRow >= endRow) {
      i = -1;
      currentChar++;
    }
  }

  return result;
};

// find and assign variables for the start rows and cols
// iterate through rows populating cells into result
// once you hit endRow, reset row counter and increment currentChar
// return result once fully populated
