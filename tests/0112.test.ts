import { TreeNode, hasPathSum } from '../tsSolutions/0112-Path-Sum';

test('Testing hasPathSum', () => {
  let root = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
  );

  expect(hasPathSum(root, 22)).toBe(true);

  root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(hasPathSum(root, 5)).toBe(false);

  const nullRoot = null;

  expect(hasPathSum(nullRoot, 0)).toBe(false);
});
