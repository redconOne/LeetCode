const isValid = (str: string): boolean => {
  const stack: string[] = [];

  for (const char of str)
    switch (char) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      case ')':
        if (stack.pop() !== ')') return false;
        break;
      case '}':
        if (stack.pop() !== '}') return false;
        break;
      case ']':
        if (stack.pop() !== ']') return false;
        break;
    }
  return stack.length === 0;
};

export default isValid;
