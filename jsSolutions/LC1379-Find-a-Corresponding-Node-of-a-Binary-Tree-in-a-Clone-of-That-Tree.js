const getTargetCopy = (original, clone, target) => {
  if (!original || original === target) return clone;

  const result = getTargetCopy(original.left, clone.left, target);
  if (result) return result;
  return getTargetCopy(original.right, clone.right, target);
};

// our base case return clone. If original === null so does the clone
// if this node isn't target, getTargetCopy on its left and right trees
