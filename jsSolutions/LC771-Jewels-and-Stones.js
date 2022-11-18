const numJewelsInStones = (jewels, stones) => {
  const start = stones.length;
  for (var jewel of jewels) stones = stones.replaceAll(jewel, '');
  return start - stones.length;
};

// start by recording the length of the stones object
// remove 'jewels' one at a time from the stones object
// count how many jewels were removed by subtracting original len from current
