const bfs = (root) => {
  const arr = [];

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }

    arr.push(node.val);
  }

  return arr;
};
