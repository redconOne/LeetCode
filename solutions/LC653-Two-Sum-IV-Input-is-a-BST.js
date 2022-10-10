const findTarget = (root, target, arr = []) => {
  if (!root) return false;

  if (arr.includes(target - root.val)) return true;
  arr.push(root.val);
  if (findTarget(root.left, target, arr)) return true;
  if (findTarget(root.right, target, arr)) return true;
  return false;
};

// base case - if root is null, return false;
// if arr contains a value that can place root.val at target, return true
// else check left
// else check right
// lastly return false
