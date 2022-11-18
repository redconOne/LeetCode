const merge = (nums1, m, nums2, n) => {
  let pointer1 = m - 1,
    pointer2 = n - 1;

  for (let i = m + n - 1; i >= 0; --i) {
    if (pointer2 < 0) break;
    if (nums1[pointer1] > nums2[pointer2]) {
      nums1[i] = nums1[pointer1];
      pointer1--;
    } else {
      nums1[i] = nums2[pointer2];
      pointer2--;
    }
  }
};

// establish pointers to navigate both arrays in reverse
// iterate through the entire nums1 array in reverse populating largest values
// if at any point pointer2 is less than 0 we are out of nums2 values, so break
// no need to return because we are mutating array
