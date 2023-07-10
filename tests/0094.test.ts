import { TreeNode } from '../tsSolutions/0094-Binary-Tree-Inorder-Traversal';
import inorderTraversal from '../tsSolutions/0094-Binary-Tree-Inorder-Traversal';

test('Testing inorderTraversal', () => {
  let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
  expect(inorderTraversal(root)).toStrictEqual([1, 3, 2]);

  root = new TreeNode();
  expect(inorderTraversal(root)).toStrictEqual([0]);

  root = new TreeNode(1);
  expect(inorderTraversal(root)).toStrictEqual([1]);
});
