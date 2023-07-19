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

const isSymmetric = (root: TreeNode | null): boolean => {
  const helper = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;

    return helper(root1.left, root2.right) && helper(root1.right, root2.left);
  };

  return helper(root, root);
};

export default isSymmetric;
