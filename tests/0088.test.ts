import merge from '../tsSolutions/0088-Merge-Sorted-Array';

test('Testing merge', () => {
  let arr = [1, 2, 3, 0, 0, 0];
  merge(arr, 3, [2, 5, 6], 3);
  expect(arr).toStrictEqual([1, 2, 2, 3, 5, 6]);

  arr = [1];
  merge(arr, 1, [], 0);
  expect(arr).toStrictEqual([1]);

  arr = [0];
  merge(arr, 0, [1], 1);
  expect(arr).toStrictEqual([1]);
});
