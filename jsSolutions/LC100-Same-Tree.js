const sameTree = (p, q) => {
  if (!p || !q) return p === q;

  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
};
