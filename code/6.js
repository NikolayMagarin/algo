const isValid = (str) => {
  if (!str.length) return true;

  const pair = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  debugger;

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (!pair[str[i]]) {
      stack.push(str[i]);
    } else if (stack.pop() !== pair[str[i]]) {
      return false;
    }
  }

  return !stack.length;
};
