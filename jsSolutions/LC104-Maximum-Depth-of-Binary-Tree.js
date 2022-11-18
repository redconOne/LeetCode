const maxDepth = (root) => {
  if (!root) return 0;

  let leftDepth = maxDepth(root.left) + 1,
    rightDepth = maxDepth(root.right) + 1;

  return leftDepth > rightDepth ? leftDepth : rightDepth;
};

// if root is null return 0 (because that's not a node)
// otherwise check left and right branches
// a branch returns 0 it was null, so we only count ourselves
// if it was populated with a node it will return at least 1.
// return greatest depth
