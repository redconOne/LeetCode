const longestCommonPrefix = (strs: string[]): string => {
  let current: string = strs[0];
  while (current.length > 0) {
    if (strs.every((item) => item.startsWith(current))) return current;
    else current = current.slice(0, current.length - 1);
  }
  return current;
};

export default longestCommonPrefix;
