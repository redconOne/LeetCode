const isValid = (str) => {
  const stack = [];
  obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of str)
    if (obj[char]) stack.push(obj[char]);
    else if (stack.pop() !== char) return false;
  return stack.length === 0;
};

// if the current char of str is an opening bracket push the corresponding closing bracket into stack
// otherwise see if char is the proper closing bracket
// after iteration, if there are no further brackets in stack return true;
