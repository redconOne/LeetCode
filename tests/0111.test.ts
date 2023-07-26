import {
  TreeNode,
  minDepth,
} from '../tsSolutions/0111-Minimum-Depth-of-Binary-Tree';

test('Testing minDepth', () => {
  let root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );

  expect(minDepth(root)).toStrictEqual(2);

  root = new TreeNode(
    2,
    null,
    new TreeNode(
      3,
      null,
      new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
    )
  );

  expect(minDepth(root)).toStrictEqual(5);
});
