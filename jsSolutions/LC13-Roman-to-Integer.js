const romanToInt = (str) => {
  let values = {
      CM: 900,
      M: 1000,
      CD: 400,
      D: 500,
      XC: 90,
      C: 100,
      XL: 40,
      L: 50,
      IX: 9,
      X: 10,
      IV: 4,
      V: 5,
      I: 1,
    },
    result = 0;
  for (let key in values)
    while (str.includes(key)) {
      result += values[key];
      str = str.replace(key, '');
    }
  return result;
};

// check for each roman numberal value in the given string
// if the key is included, remove that key from string and add to result
