import searchInsert from '../tsSolutions/0035-Search-Insert-Position';

test('Testing searchInsert', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
  expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1);
  expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(2);
});