const climbStairsR = (n) => {
  if (n < 2) return n;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

// this is actually too slow for this leetcode solution

const climbStairs = (n) => {
  if (n <= 2) return n;

  let count,
    twoAgo = 1,
    oneAgo = 2;

  for (let i = 3; i <= n; i++) {
    count = twoAgo + oneAgo;
    twoAgo = oneAgo;
    oneAgo = count;
  }

  return count;
};

// we know that the current step possibilities are equal to previous step + previous previous step possibilities

// in the event n <= 2, just return n as the num of possibilities
// otherwise start at 3
// 3 = 1 + 2
// then change out twoAgo to take oneAgo's place
// oneAgo to take current locations value
