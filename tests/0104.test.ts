import { TreeNode } from '../tsSolutions/0104-Maximum-Depth-of-Binary-Tree';
import maxDepth from '../tsSolutions/0104-Maximum-Depth-of-Binary-Tree';

test('Testing maxDepth', () => {
  let root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  expect(maxDepth(root)).toStrictEqual(3);

  root = new TreeNode(1, null, new TreeNode(2));
  expect(maxDepth(root)).toStrictEqual(2);
});
