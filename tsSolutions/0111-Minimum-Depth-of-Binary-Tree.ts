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

export const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0;

  const left = minDepth(root.left),
    right = minDepth(root.right);

  if (!left && !right) return 1;
  if (left && right) return Math.min(left, right) + 1;

  return (left | right) + 1;
};
