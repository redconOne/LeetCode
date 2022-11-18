const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  let middle = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[middle]);

  node.left = sortedArrayToBST(nums.slice(0, middle));
  node.right = sortedArrayToBST(nums.slice(middle + 1));

  return node;
};

// if the array is empty return null;

// find the middle point of the array
// create a TreeNode with the value of the array's middle item

// call sortedArrayToBST with the left half of the array and set it to node.left
// call sortedArrayToBST with the right half of the arary and set it to node.right

// return node
