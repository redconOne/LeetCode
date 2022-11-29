import removeElement from '../tsSolutions/0027-Remove-Element';

test('Testing removeElement', () => {
  let arr = [3, 2, 2, 3];
  expect(removeElement(arr, 3)).toStrictEqual(2);
  expect(arr.slice(0, 2)).toStrictEqual([2, 2]);

  arr = [0, 1, 2, 2, 3, 0, 4, 2];
  expect(removeElement(arr, 2)).toStrictEqual(5);
  expect(arr.slice(0, 5)).toStrictEqual([0, 1, 3, 0, 4]);
});
