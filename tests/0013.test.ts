import romanToInt from '../tsSolutions/0013-Roman-to-Integer';

test('Testing romanToInt', () => {
  expect(romanToInt('III')).toStrictEqual(3);
  expect(romanToInt('LVIII')).toStrictEqual(58);
  expect(romanToInt('MCMXCIV')).toStrictEqual(1994);
});
