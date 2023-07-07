const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  m--;
  n--;
  for (let i: number = m + n + 1; i >= 0 && n >= 0; --i)
    if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m];
      m--;
    } else {
      nums1[i] = nums2[n];
      n--;
    }
};

export default merge;
