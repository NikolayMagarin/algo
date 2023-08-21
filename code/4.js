const dfs = (node, arr = []) => {
  arr.push(node.val);

  if (node.left) {
    dfs(node.left, arr);
  }

  if (node.right) {
    dfs(node.right, arr);
  }

  return arr;
};
