const searchInsert = (nums: number[], target: number): number => {
    let min = 0,
      max: number = nums.length - 1;
  
    while (min <=    max) {
      const mid: number = Math.floor((min + max) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) min = mid + 1;
      else max = mid - 1;
    }
  
    return max + 1
  };
  
  export default searchInsert;