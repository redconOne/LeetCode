const isSymmetric = (root) => helper(root, root);

const helper = (root1, root2) => {
  if (!root1 && !root2) return true;
  if (!root1 || !root2 || root1.val !== root2.val) return false;
  return helper(root1.left, root2.right) && helper(root1.right, root2.left);
};

// running with a helper method to assist in keeping track of left/right