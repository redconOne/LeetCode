const inorderTraversal = (root) => {
  if (!root) return [];

  let arr = [];

  helper(root.left, arr);
  arr.push(root.val);
  helper(root.right, arr);

  return arr;
};

const helper = (root, arr) => {
  if (root) {
    helper(root.left, arr);
    arr.push(root.val);
    helper(root.right, arr);
  }
};

// main function returns empty array if given null root
// otherwise uses helper to add values of left branches, then current, then right branches

// helper adds left, current, right values to arr
