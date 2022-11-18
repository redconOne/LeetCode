const finalValueAfterOperations = (operations) => {
  let result = 0;
  for (let op of operations)
    if (op.includes('+')) result++;
    else result--;
  return result;
};

// We handle operations with + or - appropriately, regardless of x++ or ++x
