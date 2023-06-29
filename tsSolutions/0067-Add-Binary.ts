const addBinary = (a: string, b: string): string => {
  let result = '',
    carry = 0;

  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');

  for (let i = 0; i < a.length || i < b.length; ++i) {
    const temp = (+a[i] || 0) + (+b[i] || 0) + carry;

    result = temp % 2 ? 1 + result : 0 + result;
    carry = temp > 1 ? 1 : 0;
  }

  return carry ? 1 + result : result;
};

export default addBinary;
