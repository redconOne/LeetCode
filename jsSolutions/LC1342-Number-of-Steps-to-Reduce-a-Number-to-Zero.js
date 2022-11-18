const numberOfSteps = (num) => {
  if (!num) return 0;

  return num % 2 ? numberOfSteps(num - 1) + 1 : numberOfSteps(num / 2) + 1;
};
