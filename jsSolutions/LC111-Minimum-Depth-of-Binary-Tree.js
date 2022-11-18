const minDepth = (root) => {
  if (!root) return 0;

  const left = minDepth(root.left),
    right = minDepth(root.right);

  if (!left && !right) return 1;
  if (left && right) return left < right ? left + 1 : right + 1;
  return left ? left + 1 : right + 1;
};
