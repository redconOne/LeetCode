import isSymmetric from '../tsSolutions/0101-Symmetric-Tree';
import { TreeNode } from '../tsSolutions/0101-Symmetric-Tree';

test('Testing isSymmetric', () => {
  let root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
  );
  expect(isSymmetric(root)).toBe(true);

  root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
  );
  expect(isSymmetric(root)).toBe(false);
});
