import isSameTree from '../tsSolutions/0100-Same-Tree';
import { TreeNode } from '../tsSolutions/0100-Same-Tree';

test('Testing isSameTree', () => {
  let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(isSameTree(tree1, tree2)).toBe(true);

  tree1 = new TreeNode(1, new TreeNode(2));
  tree2 = new TreeNode(1, null, new TreeNode(2));
  expect(isSameTree(tree1, tree2)).toBe(false);

  tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
  tree2 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
  expect(isSameTree(tree1, tree2)).toBe(false);
});
