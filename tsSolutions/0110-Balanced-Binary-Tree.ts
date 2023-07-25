export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) return true;

  const helper = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = helper(node.left);
    const right = helper(node.right);

    if (left === -1 || right === -1) return -1;
    if (Math.abs(left - right) < 2) return Math.max(left, right) + 1;

    return -1;
  };

  const left = helper(root.left);
  const right = helper(root.right);

  if (left === -1 || right === -1) return false;
  if (Math.abs(left - right) < 2) return true;

  return false;
};
