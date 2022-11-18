const kidsWithCandies = (candies, extraCandies) => {
  const currentMax = Math.max(...candies),
    result = [];
  for (let kid of candies)
    if (kid + extraCandies >= currentMax) result.push(true);
    else result.push(false);
  return result;
};
