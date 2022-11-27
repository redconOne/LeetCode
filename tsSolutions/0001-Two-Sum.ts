const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    const current: number = nums[i],
      comp: number = target - current;

    if (map.get(comp) !== undefined) return [map.get(comp) || 0, i];

    map.set(current, i);
  }

  return [];
};

export default twoSum;
