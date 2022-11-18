const isBalanced = (root) => {
  if (!root) return true;

  const left = checkBalance(root.left);
  const right = checkBalance(root.right);

  if (left === -1 || right === -1) return false;
  if (Math.abs(left - right) < 2) return true;
  return false;
};

const checkBalance = (node) => {
  if (!node) return 0;

  const left = checkBalance(node.left);
  const right = checkBalance(node.right);

  if (left === -1 || right === -1) return -1;
  if (Math.abs(left - right) < 2) return Math.max(left, right) + 1;
  return -1;
};

// isBalanced returns true if root === null
// create a left and right variable that will be the value of checkBalance root.left/root.right
// if either left or right are -1 return false
// ensure that left and right are either the same or +- 1

// checkBalance helper function verifies whether the current tree is balanced
// if any of the values are -1 return -1 (as in not balanced)
// if any of the values are different by > 1 return -1 (not balanced)
