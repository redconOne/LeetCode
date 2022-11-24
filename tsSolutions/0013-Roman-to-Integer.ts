const romanToInt = (str: string): number => {
  let result: number = 0;
  const values: { [key: string]: number } = {
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
  };

  for (let key in values) {
    while (str.includes(key)) {
      result += values[key];
      str = str.replace(key, '');
    }
  }

  return result;
};

export default romanToInt;
