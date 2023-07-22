import { TreeNode } from '../tsSolutions/0108-Convert-Sorted-Array-to-Binary-Search-Tree';
import sortedArrayToBST from '../tsSolutions/0108-Convert-Sorted-Array-to-Binary-Search-Tree';

test('Testing sortedArrayToBST', () => {
  let solution = new TreeNode(
    0,
    new TreeNode(-3, new TreeNode(-10), null),
    new TreeNode(9, new TreeNode(5), null)
  );

  expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toStrictEqual(solution);

  solution = new TreeNode(
    0,
    new TreeNode(-3, new TreeNode(-10), null),
    new TreeNode(9, new TreeNode(5), null)
  );

  expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toStrictEqual(solution);

  solution = new TreeNode(3, new TreeNode(1), null);

  expect(sortedArrayToBST([1, 3])).toStrictEqual(solution);
});
