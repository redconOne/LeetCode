import { TreeNode } from '../tsSolutions/0110-Balanced-Binary-Tree';
import { isBalanced } from '../tsSolutions/0110-Balanced-Binary-Tree';

test('Testing isBalanced', () => {
  let root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );

  expect(isBalanced(root)).toStrictEqual(true);

  root = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3, new TreeNode(4), new TreeNode(4)),
      new TreeNode(3)
    ),
    new TreeNode(2)
  );

  expect(isBalanced(root)).toStrictEqual(false);

  const nullRoot = null;

  expect(isBalanced(nullRoot)).toStrictEqual(true);
});
