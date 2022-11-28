import removeDuplicates from '../tsSolutions/0026-Remove-Duplicates-from-Sorted-Array';

test('Testing removeDuplicates', () => {
  let arr = [1, 1, 2];
  expect(removeDuplicates(arr)).toStrictEqual(2);
  expect(arr.slice(0, 2)).toStrictEqual([1, 2]);

  arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(arr)).toStrictEqual(5);
  expect(arr.slice(0, 5)).toStrictEqual([0, 1, 2, 3, 4]);
});
