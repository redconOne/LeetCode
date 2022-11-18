const rangeSumBST = (root, low, high) => {
  if (!root) return 0;

  let counter = 0;
  if (root.val >= low && root.val <= high) counter += root.val;
  counter += rangeSumBST(root.left, low, high);
  counter += rangeSumBST(root.right, low, high);

  return counter;
};

// If the node is null we are at the end of a branch and return 0
// If current node value is acceptable add it to counter
// call to recursively check left and right nodes
// add those values to counter (they may be 0)
// return counter;
