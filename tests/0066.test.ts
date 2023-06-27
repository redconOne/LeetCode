import plusOne from '../tsSolutions/0066-Plus-One';

test('Testing plusOne', () => {
  expect(plusOne([1, 2, 4])).toStrictEqual([1, 2, 5]);
  expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
  expect(plusOne([9])).toStrictEqual([1, 0]);
});
